/**
 * Loads the XMP data with AJAX
 * @param {string} panorama
 * @returns {promise}
 * @private
 */
PhotoSphereViewer.prototype._loadXMP = function(panorama) {
  if (!this.config.usexmpdata) {
    return D.resolved(null);
  }

  var defer = D();
  var xhr = new XMLHttpRequest();
  var self = this;
  var progress = 0;

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 201 || xhr.status === 202 || xhr.status === 0) {
        if (self.loader) {
          self.loader.setProgress(100);
        }

        var binary = xhr.responseText;
        var a = binary.indexOf('<x:xmpmeta'), b = binary.indexOf('</x:xmpmeta>');
        var data = binary.substring(a, b);

        // No data retrieved
        if (a === -1 || b === -1 || data.indexOf('GPano:') === -1) {
          defer.resolve(null);
        }
        else {
          var pano_data = {
            full_width: parseInt(PSVUtils.getXMPValue(data, 'FullPanoWidthPixels')),
            full_height: parseInt(PSVUtils.getXMPValue(data, 'FullPanoHeightPixels')),
            cropped_width: parseInt(PSVUtils.getXMPValue(data, 'CroppedAreaImageWidthPixels')),
            cropped_height: parseInt(PSVUtils.getXMPValue(data, 'CroppedAreaImageHeightPixels')),
            cropped_x: parseInt(PSVUtils.getXMPValue(data, 'CroppedAreaLeftPixels')),
            cropped_y: parseInt(PSVUtils.getXMPValue(data, 'CroppedAreaTopPixels'))
          };

          if (!pano_data.full_width || !pano_data.full_height || !pano_data.cropped_width || !pano_data.cropped_height) {
            console.warn('PhotoSphereViewer: invalid XMP data');
            defer.resolve(null);
          }
          else {
            defer.resolve(pano_data);
          }
        }
      }
      else {
        self.container.textContent = 'Cannot load image';
        throw new PSVError('Cannot load image');
      }
    }
    else if (xhr.readyState === 3) {
      if (self.loader) {
        self.loader.setProgress(progress += 10);
      }
    }
  };

  xhr.onprogress = function(e) {
    if (e.lengthComputable && self.loader) {
      var new_progress = parseInt(e.loaded / e.total * 100);
      if (new_progress > progress) {
        progress = new_progress;
        self.loader.setProgress(progress);
      }
    }
  };

  xhr.onerror = function() {
    self.container.textContent = 'Cannot load image';
    throw new PSVError('Cannot load image');
  };

  xhr.open('GET', panorama, true);
  xhr.send(null);

  return defer.promise;
};

/**
 * Loads the sphere texture
 * @param {string} panorama
 * @returns {promise}
 * @private
 */
PhotoSphereViewer.prototype._loadTexture = function(panorama) {
  var self = this;

  if (this.config.cache_texture) {
    var cache = this.getPanoramaCache(panorama);

    if (cache) {
      this.prop.pano_data = cache.pano_data;

      return D.resolved(cache.image);
    }
  }

  return this._loadXMP(panorama).then(function(pano_data) {
    var defer = D();
    var loader = new THREE.ImageLoader();
    var progress = pano_data ? 100 : 0;

    loader.setCrossOrigin('anonymous');

    var onload = function(img) {
      if (self.loader) {
        self.loader.setProgress(100);
      }
      self.trigger('panorama-load-progress', panorama, 100);

      // Config XMP data
      if (!pano_data && self.config.pano_data) {
        pano_data = PSVUtils.clone(self.config.pano_data);
      }

      // Default XMP data
      if (!pano_data) {
        pano_data = {
          full_width: img.width,
          full_height: img.height,
          cropped_width: img.width,
          cropped_height: img.height,
          cropped_x: 0,
          cropped_y: 0
        };
      }

      self.prop.pano_data = pano_data;

      var r = Math.min(pano_data.full_width, PhotoSphereViewer.SYSTEM.maxTextureWidth) / pano_data.full_width;
      var resized_pano_data = PSVUtils.clone(pano_data);

      resized_pano_data.full_width *= r;
      resized_pano_data.full_height *= r;
      resized_pano_data.cropped_width *= r;
      resized_pano_data.cropped_height *= r;
      resized_pano_data.cropped_x *= r;
      resized_pano_data.cropped_y *= r;

      img.width = resized_pano_data.cropped_width;
      img.height = resized_pano_data.cropped_height;

      // create a new image containing the source image and black for cropped parts
      var buffer = document.createElement('canvas');
      buffer.width = resized_pano_data.full_width;
      buffer.height = resized_pano_data.full_height;

      var ctx = buffer.getContext('2d');
      ctx.drawImage(img, resized_pano_data.cropped_x, resized_pano_data.cropped_y, resized_pano_data.cropped_width, resized_pano_data.cropped_height);

      var texture = new THREE.Texture(buffer);
      texture.needsUpdate = true;
      texture.minFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;

      if (self.config.cache_texture) {
        self._putPanoramaCache({
          panorama: panorama,
          image: texture,
          pano_data: pano_data
        });
      }

      defer.resolve(texture);
    };

    var onprogress = function(e) {
      if (e.lengthComputable && self.loader) {
        var new_progress = parseInt(e.loaded / e.total * 100);
        if (new_progress > progress) {
          progress = new_progress;
          self.loader.setProgress(progress);
          self.trigger('panorama-load-progress', panorama, progress);
        }
      }
    };

    var onerror = function() {
      self.container.textContent = 'Cannot load image';
      throw new PSVError('Cannot load image');
    };

    loader.load(panorama, onload, onprogress, onerror);

    return defer.promise;
  });
};

/**
 * Applies the texture to the scene
 * Creates the scene if needed
 * @param {THREE.Texture} texture - The sphere texture
 * @private
 */
PhotoSphereViewer.prototype._setTexture = function(texture) {
  if (!this.scene) {
    this._createScene();
  }

  if (this.mesh.material.map) {
    this.mesh.material.map.dispose();
  }

  this.mesh.material.map = texture;

  this.trigger('panorama-loaded');

  this.render();
};

/**
 * Creates the 3D scene and GUI components
 * @private
 */
PhotoSphereViewer.prototype._createScene = function() {
  this.raycaster = new THREE.Raycaster();

  // Renderer depends on whether WebGL is supported or not
  this.renderer = PhotoSphereViewer.SYSTEM.isWebGLSupported && this.config.webgl ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
  this.renderer.setSize(this.prop.size.width, this.prop.size.height);
  this.renderer.setPixelRatio(PhotoSphereViewer.SYSTEM.pixelRatio);

  this.camera = new THREE.PerspectiveCamera(this.config.default_fov, this.prop.size.width / this.prop.size.height, 1, PhotoSphereViewer.SPHERE_RADIUS * 2);
  this.camera.position.set(0, 0, 0);

  if (this.config.gyroscope && PSVUtils.checkTHREE('DeviceOrientationControls')) {
    this.doControls = new THREE.DeviceOrientationControls(this.camera);
  }

  this.scene = new THREE.Scene();
  this.scene.add(this.camera);

  // The middle of the panorama is placed at longitude=0
  var geometry = new THREE.SphereGeometry(PhotoSphereViewer.SPHERE_RADIUS, this.config.sphere_segments, this.config.sphere_segments, -PSVUtils.HalfPI);

  var material = new THREE.MeshBasicMaterial();
  material.side = THREE.DoubleSide;
  material.overdraw = PhotoSphereViewer.SYSTEM.isWebGLSupported && this.config.webgl ? 0 : 0.5;

  this.mesh = new THREE.Mesh(geometry, material);
  this.mesh.scale.x = -1;

  this.scene.add(this.mesh);

  // create canvas container
  this.canvas_container = document.createElement('div');
  this.canvas_container.className = 'psv-canvas-container';
  this.renderer.domElement.className = 'psv-canvas';
  this.container.appendChild(this.canvas_container);
  this.canvas_container.appendChild(this.renderer.domElement);

  // Queue animation
  if (this.config.time_anim !== false) {
    this.prop.start_timeout = window.setTimeout(this.startAutorotate.bind(this), this.config.time_anim);
  }

  // Init shader renderer
  if (this.config.transition && this.config.transition.blur) {
    this.composer = new THREE.EffectComposer(this.renderer);

    this.passes.render = new THREE.RenderPass(this.scene, this.camera);

    this.passes.copy = new THREE.ShaderPass(THREE.CopyShader);
    this.passes.copy.renderToScreen = true;

    this.passes.blur = new THREE.ShaderPass(THREE.GodraysShader);
    this.passes.blur.enabled = false;
    this.passes.blur.renderToScreen = true;

    // values for minimal luminosity change
    this.passes.blur.uniforms.fDensity.value = 0.0;
    this.passes.blur.uniforms.fWeight.value = 0.5;
    this.passes.blur.uniforms.fDecay.value = 0.5;
    this.passes.blur.uniforms.fExposure.value = 1.0;

    this.composer.addPass(this.passes.render);
    this.composer.addPass(this.passes.copy);
    this.composer.addPass(this.passes.blur);
  }
};

/**
 * Perform transition between current and new texture
 * @param {THREE.Texture} texture
 * @param {{latitude: float, longitude: float}} [position]
 * @returns {promise}
 * @private
 */
PhotoSphereViewer.prototype._transition = function(texture, position) {
  var self = this;

  // create a new sphere with the new texture
  var geometry = new THREE.SphereGeometry(PhotoSphereViewer.SPHERE_RADIUS * 1.5, this.config.sphere_segments, this.config.sphere_segments, -PSVUtils.HalfPI);

  var material = new THREE.MeshBasicMaterial();
  material.side = THREE.DoubleSide;
  material.overdraw = PhotoSphereViewer.SYSTEM.isWebGLSupported && this.config.webgl ? 0 : 0.5;
  material.map = texture;
  material.transparent = true;
  material.opacity = 0;

  var mesh = new THREE.Mesh(geometry, material);
  mesh.scale.x = -1;

  // rotate the new sphere to make the target position face the camera
  if (position) {
    // Longitude rotation along the vertical axis
    mesh.rotateY(position.longitude - this.prop.longitude);

    // Latitude rotation along the camera horizontal axis
    var axis = new THREE.Vector3(0, 1, 0).cross(this.camera.getWorldDirection()).normalize();
    var q = new THREE.Quaternion().setFromAxisAngle(axis, position.latitude - this.prop.latitude);
    mesh.quaternion.multiplyQuaternions(q, mesh.quaternion);
  }

  this.scene.add(mesh);
  this.render();

  // animation with blur/zoom ?
  var original_zoom_lvl = this.prop.zoom_lvl;
  if (this.config.transition.blur) {
    this.passes.copy.enabled = false;
    this.passes.blur.enabled = true;
  }

  var onTick = function(properties) {
    material.opacity = properties.opacity;

    if (self.config.transition.blur) {
      self.passes.blur.uniforms.fDensity.value = properties.density;
      self.zoom(properties.zoom, false);
    }

    self.render();
  };

  // 1st half animation
  return PSVUtils.animation({
    properties: {
      density: { start: 0.0, end: 1.5 },
      opacity: { start: 0.0, end: 0.5 },
      zoom: { start: original_zoom_lvl, end: 100 }
    },
    duration: self.config.transition.duration / (self.config.transition.blur ? 4 / 3 : 2),
    easing: self.config.transition.blur ? 'outCubic' : 'linear',
    onTick: onTick
  })
    .then(function() {
      // 2nd half animation
      return PSVUtils.animation({
        properties: {
          density: { start: 1.5, end: 0.0 },
          opacity: { start: 0.5, end: 1.0 },
          zoom: { start: 100, end: original_zoom_lvl }
        },
        duration: self.config.transition.duration / (self.config.transition.blur ? 4 : 2),
        easing: self.config.transition.blur ? 'inCubic' : 'linear',
        onTick: onTick
      });
    })
    .then(function() {
      // disable blur shader
      if (self.config.transition.blur) {
        self.passes.copy.enabled = true;
        self.passes.blur.enabled = false;

        self.zoom(original_zoom_lvl, false);
      }

      // remove temp sphere and transfer the texture to the main sphere
      self.mesh.material.map.dispose();
      self.mesh.material.map = texture;

      self.scene.remove(mesh);

      mesh.geometry.dispose();
      mesh.geometry = null;
      mesh.material.dispose();
      mesh.material = null;

      // actually rotate the camera
      if (position) {
        // FIXME: find a better way to handle ranges
        if (self.config.latitude_range || self.config.longitude_range) {
          self.config.longitude_range = self.config.latitude_range = null;
          console.warn('PhotoSphereViewer: trying to perform transition with longitude_range and/or latitude_range, ranges cleared.');
        }

        self.rotate(position);
      }
      else {
        self.render();
      }
    });
};

/**
 * Reverse autorotate direction with smooth transition
 * @private
 */
PhotoSphereViewer.prototype._reverseAutorotate = function() {
  var self = this;
  var newSpeed = -this.config.anim_speed;
  var range = this.config.longitude_range;
  this.config.longitude_range = null;

  PSVUtils.animation({
    properties: {
      speed: { start: this.config.anim_speed, end: 0 }
    },
    duration: 300,
    easing: 'inSine',
    onTick: function(properties) {
      self.config.anim_speed = properties.speed;
    }
  })
    .then(function() {
      return PSVUtils.animation({
        properties: {
          speed: { start: 0, end: newSpeed }
        },
        duration: 300,
        easing: 'outSine',
        onTick: function(properties) {
          self.config.anim_speed = properties.speed;
        }
      });
    })
    .then(function() {
      self.config.longitude_range = range;
      self.config.anim_speed = newSpeed;
    });
};

/**
 * Adds a panorama to the cache
 * @param {object} cache
 *    - panorama
 *    - image
 *    - pano_data
 * @private
 */
PhotoSphereViewer.prototype._putPanoramaCache = function(cache) {
  if (!this.config.cache_texture) {
    throw new PSVError('Cannot add panorama to cache, cache_texture is disabled');
  }

  var existingCache = this.getPanoramaCache(cache.panorama);

  if (existingCache) {
    existingCache.image = cache.image;
    existingCache.pano_data = cache.pano_data;
  }
  else {
    this.prop.cache = this.prop.cache.slice(0, this.config.cache_texture - 1); // remove most ancient elements
    this.prop.cache.unshift(cache);
  }

  this.trigger('panorama-cached', cache.panorama);
};
