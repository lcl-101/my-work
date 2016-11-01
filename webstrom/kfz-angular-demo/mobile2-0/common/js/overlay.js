/*
 * ui.overlay弹窗组件
 * 
 * 		|———————————————————————————————————————————————————————|
 * 		|	overlayAutoTip		提示弹窗组件						|
 * 		|	功能：				显示提示信息并自动消失			|
 * 		|	参数：												|
 * 		|	 |-	@text 			[类型:String]|提示信息			|
 * 		|	 |-	@lifeTime  		[类型:int]|显示时间(可选)		|
 * 		|	返回值：				无								|
 * 		|———————————————————————————————————————————————————————|
 * 
 * 
 *  	|———————————————————————————————————————————————————————|
 * 		|	overlayConfirmTip	双按钮提示弹窗组件				|
 * 		|	功能：				显示提示信息&&确认按钮&&关闭按钮	|
 * 		|	参数：												|
 * 		|	 |-	@title 			[类型:String]|提示标题			|
 * 		|	 |-	@closeFn   		[类型:function]|关闭按钮回调		|
 * 		|	 |-	@submitFn   	[类型:function]|确认按钮回调		|
 * 		|	返回值：				无								|
 * 		|———————————————————————————————————————————————————————|
 * 
 * 
 * 		|———————————————————————————————————————————————————————|
 * 		|	overlayTip			功能型提示弹窗组件				|
 * 		|	功能：				显示提示信息&&关闭按钮			|
 * 		|	参数：				@options						|
 * 		|	 |-	@title 			[类型:String]|提示标题			|
 * 		|	 |-	@content 		[类型:String]|提示内容			|
 *   	|	 |-	@tpl    		[类型:String]|模板(可选)			|
 *   	|	 |-	@controller 	[类型:String]|控制器(可选)		|
 * 		|	 |-	@closeFn   		[类型:function]|关闭按钮回调		|
 * 		|	返回值：				无								|
 * 		|———————————————————————————————————————————————————————|
 * 
 * 
 * 
 * 
 */
angular.module("ui.overlay", ["ui.overlay.tpls","ui.overlay.modal","ui.overlay.stackedMap","ui.overlay.msgbox"]);
angular.module("ui.overlay.tpls", ["template/modal/backdrop.html","template/modal/window.html"]);
angular.module("ui.overlay.msgbox", []).factory("overlay",["$document","$timeout","$templateCache","$uibModal",function($document,$timeout,$templateCache,$uibModal){
	return {
		//表单错误提示弹窗组件
		overlayAutoErrorTip:function(text,lifeTime){
			if($document.find('overlay').length){
				$document.find('overlay').remove();
			}else if($document.find('overlayautotip').length){
				$document.find('overlayautotip').remove();
			}
			var t = Number(lifeTime);
			t = t?t:1500;
			var tpl = '<overlayautotip class="overlay_error_tip"><p><span class="iconfont icon-tishi font_n1"></span> '+ text +'</p></overlayautotip>';
			$document.find('body').prepend(tpl);
			var dom = $document.find('overlayautotip');
			$timeout(function(){
				dom.remove();
			},t);
		},
		//提示弹窗组件
		overlayAutoTip:function(text,lifeTime,callback){
			if($document.find('overlay').length){
				$document.find('overlay').remove();
			}else if($document.find('overlayautotip').length){
				$document.find('overlayautotip').remove();
			}
			var t = Number(lifeTime);
			t = t?t:1500;
			var tpl = '<overlayautotip><p>'+ text +'</p></overlayautotip>';
			$document.find('body').prepend(tpl);
			var dom = $document.find('overlayautotip');
			$timeout(function(){
				dom.remove();
				if(callback){
					callback();
				}
			},t);
		},
		//双按钮提示弹窗组件
		overlayConfirmTip:function(options){
			if($document.find('overlay').length){
				$document.find('overlay').remove();
			}else if($document.find('overlayautotip').length){
				$document.find('overlayautotip').remove();
			}
			var title = options.title || '';
			var confirmBtn = options.confirmBtn || '是';
			var closeBtn = options.closeBtn || '否';
			var confirmFn = options.confirmFn || function(){};
			var closeFn = options.closeFn || function(){};
			var bodyDom = document.body;
			var tpl = '<overlay><overlayconfirmtip><overlaytitle><p>'+ title +'</p></overlaytitle><btn><a href="javascript:;" class="canclebtn">'+ closeBtn +'</a><a href="javascript:;" class="confirmbtn">'+ confirmBtn +'</a></btn></overlayconfirmtip></overlay>';
			$document.find('body').prepend(tpl);
            bodyDom.style.overflow='hidden';
			var confirmbtn = angular.element(document.querySelector('a.confirmbtn'));
			var canclebtn = angular.element(document.querySelector('a.canclebtn'));
			var dom = $document.find('overlay');
			canclebtn[0].onclick = function(){
				bodyDom.style.overflow='';
				dom.remove();
				closeFn();
			};
			confirmbtn[0].onclick = function(){
				bodyDom.style.overflow='';
				dom.remove();
				confirmFn();
			};
			dom[0].onclick = function(e){
				var node = e.target.tagName;
				if(node === 'OVERLAY'){
					bodyDom.style.overflow='';
					dom.remove();
				}
			};
		},
		//功能型提示弹窗组件
		overlayTip:function(options){
			if($document.find('overlay').length){
				$document.find('overlay').remove();
			}else if($document.find('overlayautotip').length){
				$document.find('overlayautotip').remove();
			}
			var title = options.title || '';
			var content = options.content || '';
			var tplName = options.tpl || '';
			var controller = options.controller || '';
			var closeFn = options.closeFn || function(){};
			var bodyDom = document.body;
			if(tplName != ''){
				var template = $templateCache.get(tplName);
				var tpl = '<div class="overlay_box"><overlaytitle><p ng-bind="title"></p></overlaytitle><overlaycontent>'+ template +'</overlaycontent><a href="javascript:;" class="closebtn" ng-click="close()">关闭</a></div>';
				var overlayTip = $uibModal.open({
	                template: tpl,
	                controller: controller,
	                resolve: {
	                    items: function () {
	                        return options;
	                    }
	                }
	            });
	            overlayTip.result.then(function () {
	            	closeFn();
	            },function(){
	            	
	            });
			}else{
				var tpl = '<overlay><overlaytip><overlaytitle><p>'+ title +'</p></overlaytitle><overlaycontent><p class="content">'+ content +'</p></overlaycontent><a href="javascript:;" class="closebtn">关闭</a></overlaytip></overlay>';
				$document.find('body').prepend(tpl);
				var closebtn = $document.find('closebtn');
				var dom = $document.find('overlay');
				closebtn[0].onclick = function(){
					bodyDom.style.overflow='';
					dom.remove();
					closeFn();
				};
				dom[0].onclick = function(e){
					var node = e.target.tagName;
					if(node === 'OVERLAY'){
						bodyDom.style.overflow='';
						dom.remove();
					}
				};
			}
		},
		//滚动选择弹窗组件
		overlaySelectWin:function(options){
			if($document.find('overlay').length){
				$document.find('overlay').remove();
			}else if($document.find('overlayautotip').length){
				$document.find('overlayautotip').remove();
			}
			var title = options.title || '';
			var tplName = options.tpl || '';
			var controller = options.controller || '';
			var cancleBtn = options.cancleBtn || '取消';
			var submitBtn = options.submitBtn || '确定';
			var cancleFn = options.cancleFn || function(){};
			var submitFn = options.submitFn || function(){};
			if(tplName != ''){
				var template = $templateCache.get(tplName);
				var tpl = '<overlaySelectWin><overlaytitle><p><a href="javascript:;" class="cancle_btn" ng-click="cancel()">'+ cancleBtn +'</a><span  ng-bind="title"></span><a href="javascript:;" class="submit_btn" ng-click="confirm()">'+ submitBtn +'</a></p></overlaytitle>'+ template +'</overlaySelectWin>';
				var overlayTip = $uibModal.open({
	                template: tpl,
	                controller: controller,
	                resolve: {
	                    items: function () {
	                        return options;
	                    }
	                }
	            });
	            overlayTip.result.then(function (type) {
					if(type == 'cancel'){
						cancleFn();
					}else{
						submitFn(type);
					}
	            },function(){
	            	
	            });
			}
		}
	}
}]).directive('scrollMask',['$document',function($document){
	return{
		link: function(scope,elemt,attr) {
			//touch版本
			var start_y,end_y,domTop,domHeight,index;
			var dom = angular.element(elemt[0]).find('ul');
			var data = 'scope.' + attr.data;
			domTop = 100;
			dom[0].style.top = domTop + 'px';
			elemt.on('touchstart',function(e){
				e.preventDefault();
				domTop = parseInt(dom[0].style.top);
				domHeight = parseInt(dom[0].offsetHeight);
				start_y = parseInt(e.touches[0].clientY);
			});
			elemt.on('touchmove',function(e){
				e.preventDefault();
				end_y = parseInt(e.touches[0].clientY);
				var top = domTop + (end_y - start_y);
				if(top > 100){
					dom[0].style.top = '100px';
				}else if(top < -(domHeight - 150)){
					dom[0].style.top = -(domHeight - 150) + 'px';
				}else{
					dom[0].style.top = top + 'px';
				}
				
			});
			elemt.on('touchend',function(e){
				e.preventDefault();
				var top = parseInt(dom[0].style.top);
				if(Math.abs(top-100) <= 25){
					index = 0;
					dom[0].style.top = '100px';
				}else{
					if(Math.abs(top-100)%50 < 25){
						dom[0].style.top = -Math.floor(parseInt(Math.abs(top-125)/50))*50+100 + 'px';
			       }else if(Math.abs(top-100)%50 > 25){
						dom[0].style.top = -Math.ceil(parseInt(Math.abs(top-125)/50))*50+100 + 'px';
					}
			       index = parseInt(Math.abs(top-125)/50);
				}
				var savedReset = data + '[index]';
			    scope.$emit(''+ attr.change +'',eval(savedReset));
			});
        }
	}
}]).directive('selectItem',['$document','$timeout',function($document,$timeout){
	return{
		link: function(scope,elemt,attr) {
			if(attr.active == 'true'){
				elemt[0].parentElement.style.top = -(50*scope.$index - 100) + 'px';
			}
        }
	}
}]).directive('setUp',['$document','$timeout',function($document,$timeout){
	return{
		link: function(scope,elemt,attr) {
			elemt.on('touchend',function(e){
				var clearBtns = document.getElementsByClassName('clear_icon');
				if(angular.element(e.target).hasClass('clear_icon')){
					e.target.previousElementSibling.value = '';
					if(document.createEvent){
					    var evObj = document.createEvent('HTMLEvents');
					    evObj.initEvent( 'change', false, false);
					    e.target.previousElementSibling.dispatchEvent(evObj);
					}else if(document.createEventObject){
					    e.target.previousElementSibling.fireEvent('onkeyup');
					}
					e.target.style.visibility = 'hidden';
					e.target.previousElementSibling.focus();
				}else{
					if(clearBtns.length){
						if(angular.element(e.target).hasClass('clear_input')){
							for(var i = 0;i < clearBtns.length;i++){
								clearBtns[i].style.visibility = 'hidden';
							}
							if(e.target.value !=''){
								e.target.nextElementSibling.style.visibility = 'visible';
							}
						}else{
							for(var i = 0;i < clearBtns.length;i++){
								clearBtns[i].style.visibility = 'hidden';
							}
						}
					}
				}
			})			
        }
	}
}]).directive('clearInput',['$document','$timeout',function($document,$timeout){
	return{
		link: function(scope,elemt,attr) {
			elemt[0].onfocus = function(){
				if(elemt[0].value != ''){
					elemt[0].nextElementSibling.style.visibility = 'visible';	
				}
			}
			elemt[0].oninput = function(){
				if(this.value == ''){
					this.nextElementSibling.style.visibility = 'hidden';	
				}else{
					this.nextElementSibling.style.visibility = 'visible';
				}
			}
        }
	}
}]).directive('clearHolder',function(){
	return{
		link: function(scope,elemt,attr) {
			attr.clearHolder = attr.placeholder;
			elemt.on('focus',function(){
				elemt[0].placeholder = '';
			});
			elemt.on('blur',function(){
				elemt[0].placeholder = attr.clearHolder;
			});
        }
	}
}).directive('errTip',function(){
	return{
		link: function(scope,elemt,attr) {
			elemt[0].addEventListener("webkitAnimationEnd", function(){
				this.className = 'errbox';
				scope.$apply(function(){scope[attr.errTip] = false;});
			}, false);
        }
	}
});
angular.module('ui.overlay.modal', ['ui.overlay.stackedMap']).factory('$$multiMap', function() {
    return {
		createNew: function() {
			var map = {};
			return {
				entries: function() {
					return Object.keys(map).map(function(key) {
						return {
							key: key,
							value: map[key]
						};
					});
				},
				get: function(key) {
					return map[key];
				},
				hasKey: function(key) {
					return !!map[key];
				},
				keys: function() {
					return Object.keys(map);
				},
				put: function(key, value) {
					if (!map[key]) {
						map[key] = [];
					}
					map[key].push(value);
				},
				remove: function(key, value) {
					var values = map[key];
					if (!values) {
						return;
					}
					var idx = values.indexOf(value);
					if (idx !== -1) {
						values.splice(idx, 1);
					}
					if (!values.length) {
						delete map[key];
					}
				}
			};
		}
	};
}).directive('uibModalBackdrop', ['$animate', '$injector', '$uibModalStack',function($animate ,  $injector,   $modalStack) {
	var $animateCss = null;
	if ($injector.has('$animateCss')) {
		$animateCss = $injector.get('$animateCss');
	}
	return {
		replace: true,
		templateUrl: 'template/modal/backdrop.html',
		compile: function(tElement, tAttrs) {
			tElement.addClass(tAttrs.backdropClass);
			return linkFn;
		}
	};
	
	function linkFn(scope, element, attrs) {
		element.addClass('modal-backdrop');
		if (attrs.modalInClass) {
			if ($animateCss) {
				$animateCss(element, {
					addClass: attrs.modalInClass
				}).start();
			} else {
				$animate.addClass(element, attrs.modalInClass);
			}
			scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
				var done = setIsAsync();
				if ($animateCss) {
					$animateCss(element, {
						removeClass: attrs.modalInClass
					}).start().then(done);
				} else {
					$animate.removeClass(element, attrs.modalInClass).then(done);
				}
			});
		}
	}
}]).directive('uibModalWindow', ['$uibModalStack', '$q', '$animate', '$injector',function($modalStack ,  $q ,  $animate,   $injector) {
	var $animateCss = null;
	if ($injector.has('$animateCss')) {
		$animateCss = $injector.get('$animateCss');
	}
	return {
		scope: {
			index: '@'
		},
		replace: true,
		transclude: true,
		templateUrl: function(tElement, tAttrs) {
			return tAttrs.templateUrl || 'template/modal/window.html';
		},
		link: function(scope, element, attrs) {
			element.addClass(attrs.windowClass || '');
			element.addClass(attrs.windowTopClass || '');
			scope.size = attrs.size;
			scope.close = function(evt) {
				var modal = $modalStack.getTop();
				if (modal && modal.value.backdrop && modal.value.backdrop !== 'static' && (evt.target === evt.currentTarget)) {
					evt.preventDefault();
					evt.stopPropagation();
					$modalStack.dismiss(modal.key, 'backdrop click');
				}
			};
			scope.closeW = function(){
				var modal = $modalStack.getTop();
				$modalStack.dismiss(modal.key, 'backdrop click');
			};
//			element.on('click', scope.close);
			element.on('click', function(e){
				e.preventDefault();
				e.stopPropagation();
				if(e.target.className == 'modal-content'){
					scope.closeW();
				}
			});
			scope.$isRendered = true;
			var modalRenderDeferObj = $q.defer();
			attrs.$observe('modalRender', function(value) {
				if (value == 'true') {
					modalRenderDeferObj.resolve();
				}
			});
			modalRenderDeferObj.promise.then(function() {
				var animationPromise = null;
				if (attrs.modalInClass) {
					if ($animateCss) {
						animationPromise = $animateCss(element, {
							addClass: attrs.modalInClass
						}).start();
					} else {
						animationPromise = $animate.addClass(element, attrs.modalInClass);
					}
					scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
						var done = setIsAsync();
						if ($animateCss) {
							$animateCss(element, {
								removeClass: attrs.modalInClass
							}).start().then(done);
						} else {
							$animate.removeClass(element, attrs.modalInClass).then(done);
						}
					});
				}
				$q.when(animationPromise).then(function() {
					var inputWithAutofocus = element[0].querySelector('[autofocus]');
					if (inputWithAutofocus) {
						inputWithAutofocus.focus();
					} else {
						element[0].focus();
					}
				});
				var modal = $modalStack.getTop();
				if (modal) {
					$modalStack.modalRendered(modal.key);
				}
			});
		}
	};
}]).directive('uibModalAnimationClass', function() {
	return {
		compile: function(tElement, tAttrs) {
			if (tAttrs.modalAnimation) {
				tElement.addClass(tAttrs.uibModalAnimationClass);
			}
		}
	};
}).directive('uibModalTransclude', function() {
	return {
		link: function($scope, $element, $attrs, controller, $transclude) {
			$transclude($scope.$parent, function(clone) {
				$element.empty();
				$element.append(clone);
			});
		}
	};
}).factory('$uibModalStack', ['$animate', '$timeout', '$document', '$compile', '$rootScope','$q','$injector','$$multiMap','$$stackedMap',function($animate,$timeout,$document,$compile ,$rootScope ,$q,$injector,$$multiMap,$$stackedMap) {
	var $animateCss = null;
	if ($injector.has('$animateCss')) {
		$animateCss = $injector.get('$animateCss');
	}
	var OPENED_MODAL_CLASS = 'modal-open';
	
	var backdropDomEl, backdropScope;
	var openedWindows = $$stackedMap.createNew();
	var openedClasses = $$multiMap.createNew();
	var $modalStack = {
		NOW_CLOSING_EVENT: 'modal.stack.now-closing'
	};
	var focusableElementList;
	var focusIndex = 0;
	var tababbleSelector = 'a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]';
	
	function backdropIndex() {
		var topBackdropIndex = -1;
		var opened = openedWindows.keys();
		for (var i = 0; i < opened.length; i++) {
			if (openedWindows.get(opened[i]).value.backdrop) {
				topBackdropIndex = i;
			}
		}
		return topBackdropIndex;
	}
	$rootScope.$watch(backdropIndex, function(newBackdropIndex) {
		if (backdropScope) {
			backdropScope.index = newBackdropIndex;
		}
	});
	
	function removeModalWindow(modalInstance, elementToReceiveFocus) {
		var body = $document.find('body').eq(0);
		var modalWindow = openedWindows.get(modalInstance).value;
		openedWindows.remove(modalInstance);
		removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
			var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
			openedClasses.remove(modalBodyClass, modalInstance);
			body.toggleClass(modalBodyClass, openedClasses.hasKey(modalBodyClass));
			toggleTopWindowClass(true);
		});
		checkRemoveBackdrop();
		if (elementToReceiveFocus && elementToReceiveFocus.focus) {
			elementToReceiveFocus.focus();
		} else {
			body.focus();
		}
	}
	
	function toggleTopWindowClass(toggleSwitch) {
		var modalWindow;
		var body = $document.find('body').eq(0);
		var view = angular.element(document.querySelector('.kfz-layout')).eq(0);
		var h = document.documentElement.clientHeight;
		if(toggleSwitch){
			body[0].style.height = 'auto';
			view[0].style.height = 'auto';
			view[0].style.overflow = 'visible';
		}else{
			body[0].style.height = h + 'px';
			view[0].style.height = h + 'px';
			view[0].style.overflow = 'hidden';
		}
		if (openedWindows.length() > 0) {
			modalWindow = openedWindows.top().value;
			modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || '', toggleSwitch);
		}
	}
	
	function checkRemoveBackdrop() {
		if (backdropDomEl && backdropIndex() == -1) {
			var backdropScopeRef = backdropScope;
			removeAfterAnimate(backdropDomEl, backdropScope, function() {
				backdropScopeRef = null;
			});
			backdropDomEl = undefined;
			backdropScope = undefined;
		}
	}
	
	function removeAfterAnimate(domEl, scope, done) {
		var asyncDeferred;
		var asyncPromise = null;
		var setIsAsync = function() {
			if (!asyncDeferred) {
				asyncDeferred = $q.defer();
				asyncPromise = asyncDeferred.promise;
			}
			return function asyncDone() {
				asyncDeferred.resolve();
			};
		};
		scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync);
		return $q.when(asyncPromise).then(afterAnimating);
	
		function afterAnimating() {
			if (afterAnimating.done) {
				return;
			}
			afterAnimating.done = true;
			if ($animateCss) {
				$animateCss(domEl, {
					event: 'leave'
				}).start().then(function() {
					domEl.remove();
				});
			} else {
				$animate.leave(domEl);
			}
			scope.$destroy();
			if (done) {
				done();
			}
		}
	}
	$document.bind('keydown', function(evt) {
		if (evt.isDefaultPrevented()) {
			return evt;
		}
		var modal = openedWindows.top();
		if (modal && modal.value.keyboard) {
			switch (evt.which) {
				case 27:
					{
						evt.preventDefault();
						$rootScope.$apply(function() {
							$modalStack.dismiss(modal.key, 'escape key press');
						});
						break;
					}
				case 9:
					{
						$modalStack.loadFocusElementList(modal);
						var focusChanged = false;
						if (evt.shiftKey) {
							if ($modalStack.isFocusInFirstItem(evt)) {
								focusChanged = $modalStack.focusLastFocusableElement();
							}
						} else {
							if ($modalStack.isFocusInLastItem(evt)) {
								focusChanged = $modalStack.focusFirstFocusableElement();
							}
						}
	
						if (focusChanged) {
							evt.preventDefault();
							evt.stopPropagation();
						}
						break;
					}
			}
		}
	});
	$modalStack.open = function(modalInstance, modal) {
		var modalOpener = $document[0].activeElement,
			modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;
		toggleTopWindowClass(false);
		openedWindows.add(modalInstance, {
			deferred: modal.deferred,
			renderDeferred: modal.renderDeferred,
			modalScope: modal.scope,
			backdrop: modal.backdrop,
			keyboard: modal.keyboard,
			openedClass: modal.openedClass,
			windowTopClass: modal.windowTopClass
		});
		openedClasses.put(modalBodyClass, modalInstance);
		var body = $document.find('body').eq(0),
			currBackdropIndex = backdropIndex();
		if (currBackdropIndex >= 0 && !backdropDomEl) {
			backdropScope = $rootScope.$new(true);
			backdropScope.index = currBackdropIndex;
			var angularBackgroundDomEl = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');
			angularBackgroundDomEl.attr('backdrop-class', modal.backdropClass);
			if (modal.animation) {
				angularBackgroundDomEl.attr('modal-animation', 'true');
			}
			backdropDomEl = $compile(angularBackgroundDomEl)(backdropScope);
			body.append(backdropDomEl);
		}
		var angularDomEl = angular.element('<div uib-modal-window="modal-window"></div>');
		angularDomEl.attr({
			'template-url': modal.windowTemplateUrl,
			'window-class': modal.windowClass,
			'window-top-class': modal.windowTopClass,
			'size': modal.size,
			'index': openedWindows.length() - 1,
			'animate': 'animate'
		}).html(modal.content);
		if (modal.animation) {
			angularDomEl.attr('modal-animation', 'true');
		}
		var modalDomEl = $compile(angularDomEl)(modal.scope);
		openedWindows.top().value.modalDomEl = modalDomEl;
		openedWindows.top().value.modalOpener = modalOpener;
		body.append(modalDomEl);
		body.addClass(modalBodyClass);
		$modalStack.clearFocusListCache();
	};
	function broadcastClosing(modalWindow, resultOrReason, closing) {
		return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
	}
	$modalStack.close = function(modalInstance, result) {
		var modalWindow = openedWindows.get(modalInstance);
		if (modalWindow && broadcastClosing(modalWindow, result, true)) {
			modalWindow.value.modalScope.$$uibDestructionScheduled = true;
			modalWindow.value.deferred.resolve(result);
			removeModalWindow(modalInstance, modalWindow.value.modalOpener);
			return true;
		}
		return !modalWindow;
	};
	$modalStack.dismiss = function(modalInstance, reason) {
		var modalWindow = openedWindows.get(modalInstance);
		if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
			modalWindow.value.modalScope.$$uibDestructionScheduled = true;
			modalWindow.value.deferred.reject(reason);
			removeModalWindow(modalInstance, modalWindow.value.modalOpener);
			return true;
		}
		return !modalWindow;
	};
	$modalStack.dismissAll = function(reason) {
		var topModal = this.getTop();
		while (topModal && this.dismiss(topModal.key, reason)) {
			topModal = this.getTop();
		}
	};
	$modalStack.getTop = function() {
		return openedWindows.top();
	};
	$modalStack.modalRendered = function(modalInstance) {
		var modalWindow = openedWindows.get(modalInstance);
		if (modalWindow) {
			modalWindow.value.renderDeferred.resolve();
		}
	};
	$modalStack.focusFirstFocusableElement = function() {
		if (focusableElementList.length > 0) {
			focusableElementList[0].focus();
			return true;
		}
		return false;
	};
	$modalStack.focusLastFocusableElement = function() {
		if (focusableElementList.length > 0) {
			focusableElementList[focusableElementList.length - 1].focus();
			return true;
		}
		return false;
	};
	$modalStack.isFocusInFirstItem = function(evt) {
		if (focusableElementList.length > 0) {
			return (evt.target || evt.srcElement) == focusableElementList[0];
		}
		return false;
	};
	$modalStack.isFocusInLastItem = function(evt) {
		if (focusableElementList.length > 0) {
			return (evt.target || evt.srcElement) == focusableElementList[focusableElementList.length - 1];
		}
		return false;
	};
	$modalStack.clearFocusListCache = function() {
		focusableElementList = [];
		focusIndex = 0;
	};
	$modalStack.loadFocusElementList = function(modalWindow) {
		if (focusableElementList === undefined || !focusableElementList.length) {
			if (modalWindow) {
				var modalDomE1 = modalWindow.value.modalDomEl;
				if (modalDomE1 && modalDomE1.length) {
					focusableElementList = modalDomE1[0].querySelectorAll(tababbleSelector);
				}
			}
		}
	};
	return $modalStack;
}]).provider('$uibModal', function() {
	var $modalProvider = {
		options: {
			animation: true,
			backdrop: true,
			keyboard: true
		},
		$get: ['$injector', '$rootScope', '$q', '$templateRequest', '$controller', '$uibModalStack', '$modalSuppressWarning', '$log',
			function($injector, $rootScope, $q, $templateRequest, $controller, $modalStack, $modalSuppressWarning, $log) {
				var $modal = {};
	
				function getTemplatePromise(options) {
					return options.template ? $q.when(options.template) :
						$templateRequest(angular.isFunction(options.templateUrl) ? (options.templateUrl)() : options.templateUrl);
				}
	
				function getResolvePromises(resolves) {
					var promisesArr = [];
					angular.forEach(resolves, function(value) {
						if (angular.isFunction(value) || angular.isArray(value)) {
							promisesArr.push($q.when($injector.invoke(value)));
						} else if (angular.isString(value)) {
							promisesArr.push($q.when($injector.get(value)));
						} else {
							promisesArr.push($q.when(value));
						}
					});
					return promisesArr;
				}
				var promiseChain = null;
				$modal.getPromiseChain = function() {
					return promiseChain;
				};
				$modal.open = function(modalOptions) {
					var modalResultDeferred = $q.defer();
					var modalOpenedDeferred = $q.defer();
					var modalRenderDeferred = $q.defer();
					var modalInstance = {
						result: modalResultDeferred.promise,
						opened: modalOpenedDeferred.promise,
						rendered: modalRenderDeferred.promise,
						close: function(result) {
							return $modalStack.close(modalInstance, result);
						},
						dismiss: function(reason) {
							return $modalStack.dismiss(modalInstance, reason);
						}
					};
					modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
					modalOptions.resolve = modalOptions.resolve || {};
					if (!modalOptions.template && !modalOptions.templateUrl) {
						throw new Error('One of template or templateUrl options is required.');
					}
					var templateAndResolvePromise =
						$q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));
	
					function resolveWithTemplate() {
						return templateAndResolvePromise;
					}
					var samePromise;
					samePromise = promiseChain = $q.all([promiseChain])
						.then(resolveWithTemplate, resolveWithTemplate)
						.then(function resolveSuccess(tplAndVars) {
							var modalScope = (modalOptions.scope || $rootScope).$new();
							modalScope.$close = modalInstance.close;
							modalScope.$dismiss = modalInstance.dismiss;
							modalScope.$on('$destroy', function() {
								if (!modalScope.$$uibDestructionScheduled) {
									modalScope.$dismiss('$uibUnscheduledDestruction');
								}
							});
							var ctrlInstance, ctrlLocals = {};
							var resolveIter = 1;
							if (modalOptions.controller) {
								ctrlLocals.$scope = modalScope;
								ctrlLocals.$uibModalInstance = modalInstance;
								Object.defineProperty(ctrlLocals, '$modalInstance', {
									get: function() {
										if (!$modalSuppressWarning) {
											$log.warn('$modalInstance is now deprecated. Use $uibModalInstance instead.');
										}
										return modalInstance;
									}
								});
								angular.forEach(modalOptions.resolve, function(value, key) {
									ctrlLocals[key] = tplAndVars[resolveIter++];
								});
								ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
								if (modalOptions.controllerAs) {
									if (modalOptions.bindToController) {
										angular.extend(ctrlInstance, modalScope);
									}
									modalScope[modalOptions.controllerAs] = ctrlInstance;
								}
							}
							$modalStack.open(modalInstance, {
								scope: modalScope,
								deferred: modalResultDeferred,
								renderDeferred: modalRenderDeferred,
								content: tplAndVars[0],
								animation: modalOptions.animation,
								backdrop: modalOptions.backdrop,
								keyboard: modalOptions.keyboard,
								backdropClass: modalOptions.backdropClass,
								windowTopClass: modalOptions.windowTopClass,
								windowClass: modalOptions.windowClass,
								windowTemplateUrl: modalOptions.windowTemplateUrl,
								size: modalOptions.size,
								openedClass: modalOptions.openedClass
							});
							modalOpenedDeferred.resolve(true);
	
						}, function resolveError(reason) {
							modalOpenedDeferred.reject(reason);
							modalResultDeferred.reject(reason);
						})
						.finally(function() {
							if (promiseChain === samePromise) {
								promiseChain = null;
							}
						});
					return modalInstance;
				};
				return $modal;
			}
		]
	};
	return $modalProvider;
});
angular.module('ui.overlay.modal').value('$modalSuppressWarning', false).directive('modalBackdrop', ['$animate', '$injector', '$modalStack', '$log', '$modalSuppressWarning',function($animate ,  $injector,   $modalStack, $log, $modalSuppressWarning) {
	var $animateCss = null;
	if ($injector.has('$animateCss')) {
		$animateCss = $injector.get('$animateCss');
	}
	return {
		replace: true,
		templateUrl: 'template/modal/backdrop.html',
		compile: function(tElement, tAttrs) {
			tElement.addClass(tAttrs.backdropClass);
			return linkFn;
		}
	};
	function linkFn(scope, element, attrs) {
		if (!$modalSuppressWarning) {
			$log.warn('modal-backdrop is now deprecated. Use uib-modal-backdrop instead.');
		}
		element.addClass('modal-backdrop');
		if (attrs.modalInClass) {
			if ($animateCss) {
				$animateCss(element, {
					addClass: attrs.modalInClass
				}).start();
			} else {
				$animate.addClass(element, attrs.modalInClass);
			}
			scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
				var done = setIsAsync();
				if ($animateCss) {
					$animateCss(element, {
						removeClass: attrs.modalInClass
					}).start().then(done);
				} else {
					$animate.removeClass(element, attrs.modalInClass).then(done);
				}
			});
		}
	}
}]).directive('modalWindow', ['$modalStack', '$q', '$animate', '$injector', '$log', '$modalSuppressWarning',function($modalStack ,  $q ,  $animate,   $injector, $log, $modalSuppressWarning) {
	var $animateCss = null;
	if ($injector.has('$animateCss')) {
		$animateCss = $injector.get('$animateCss');
	}
	return {
		scope: {
			index: '@'
		},
		replace: true,
		transclude: true,
		templateUrl: function(tElement, tAttrs) {
			return tAttrs.templateUrl || 'template/modal/window.html';
		},
		link: function(scope, element, attrs) {
			if (!$modalSuppressWarning) {
				$log.warn('modal-window is now deprecated. Use uib-modal-window instead.');
			}
			element.addClass(attrs.windowClass || '');
			element.addClass(attrs.windowTopClass || '');
			scope.size = attrs.size;
			scope.close = function(evt) {
				var modal = $modalStack.getTop();
				if (modal && modal.value.backdrop && modal.value.backdrop !== 'static' && (evt.target === evt.currentTarget)) {
					evt.preventDefault();
					evt.stopPropagation();
					$modalStack.dismiss(modal.key, 'backdrop click');
				}
			};
			element.on('click', scope.close);
			scope.$isRendered = true;
			var modalRenderDeferObj = $q.defer();
			attrs.$observe('modalRender', function(value) {
				if (value == 'true') {
					modalRenderDeferObj.resolve();
				}
			});
			modalRenderDeferObj.promise.then(function() {
				var animationPromise = null;
				if (attrs.modalInClass) {
					if ($animateCss) {
						animationPromise = $animateCss(element, {
							addClass: attrs.modalInClass
						}).start();
					} else {
						animationPromise = $animate.addClass(element, attrs.modalInClass);
					}
					scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
						var done = setIsAsync();
						if ($animateCss) {
							$animateCss(element, {
								removeClass: attrs.modalInClass
							}).start().then(done);
						} else {
							$animate.removeClass(element, attrs.modalInClass).then(done);
						}
					});
				}
				$q.when(animationPromise).then(function() {
					var inputWithAutofocus = element[0].querySelector('[autofocus]');
					if (inputWithAutofocus) {
						inputWithAutofocus.focus();
					} else {
						element[0].focus();
					}
				});
				var modal = $modalStack.getTop();
				if (modal) {
					$modalStack.modalRendered(modal.key);
				}
			});
		}
	};
}]).directive('modalAnimationClass', ['$log', '$modalSuppressWarning',function ($log, $modalSuppressWarning) {
	return {
		compile: function(tElement, tAttrs) {
			if (!$modalSuppressWarning) {
				$log.warn('modal-animation-class is now deprecated. Use uib-modal-animation-class instead.');
			}
			if (tAttrs.modalAnimation) {
				tElement.addClass(tAttrs.modalAnimationClass);
			}
		}
	};
}]).directive('modalTransclude', ['$log', '$modalSuppressWarning',function ($log, $modalSuppressWarning) {
	return {
		link: function($scope, $element, $attrs, controller, $transclude) {
			if (!$modalSuppressWarning) {
				$log.warn('modal-transclude is now deprecated. Use uib-modal-transclude instead.');
			}
			$transclude($scope.$parent, function(clone) {
				$element.empty();
				$element.append(clone);
			});
		}
	};
}]).service('$modalStack', ['$animate', '$timeout', '$document', '$compile', '$rootScope','$q','$injector','$$multiMap','$$stackedMap','$uibModalStack','$log','$modalSuppressWarning',function($animate ,  $timeout ,  $document ,  $compile ,  $rootScope ,$q,$injector,$$multiMap,$$stackedMap,$uibModalStack,$log,$modalSuppressWarning) {
	if (!$modalSuppressWarning) {
		$log.warn('$modalStack is now deprecated. Use $uibModalStack instead.');
	}
	angular.extend(this, $uibModalStack);
}]).provider('$modal', ['$uibModalProvider', function($uibModalProvider) {
	angular.extend(this, $uibModalProvider);
	this.$get = ['$injector', '$log', '$modalSuppressWarning',function($injector, $log, $modalSuppressWarning) {
			if (!$modalSuppressWarning) {
				$log.warn('$modal is now deprecated. Use      instead.');
			}
			return $injector.invoke($uibModalProvider.$get);
		}
	];
}]);
angular.module('ui.overlay.stackedMap', []).factory('$$stackedMap', function() {
	return {
		createNew: function() {
			var stack = [];
			return {
				add: function(key, value) {
					stack.push({
						key: key,
						value: value
					});
				},
				get: function(key) {
					for (var i = 0; i < stack.length; i++) {
						if (key == stack[i].key) {
							return stack[i];
						}
					}
				},
				keys: function() {
					var keys = [];
					for (var i = 0; i < stack.length; i++) {
						keys.push(stack[i].key);
					}
					return keys;
				},
				top: function() {
					return stack[stack.length - 1];
				},
				remove: function(key) {
					var idx = -1;
					for (var i = 0; i < stack.length; i++) {
						if (key == stack[i].key) {
							idx = i;
							break;
						}
					}
					return stack.splice(idx, 1)[0];
				},
				removeTop: function() {
					return stack.splice(stack.length - 1, 1)[0];
				},
				length: function() {
					return stack.length;
				}
			};
		}
	};
});
angular.module("template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
	$templateCache.put("template/modal/backdrop.html",'<div class="modal-backdrop"\n     uib-modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 10040 + (index && 1 || 0) + index*10}"\n></div>\n');
}]);
angular.module("template/modal/window.html", []).run(["$templateCache", function($templateCache) {
	$templateCache.put("template/modal/window.html",'<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    uib-modal-animation-class="fade"\n    modal-in-class="in"\n    ng-style="{ display: \'block\'}">\n    <div class="modal-dialog {{size ? \'modal-\' + size : \'\'}}"><div class="modal-content" uib-modal-transclude></div></div>\n</div>\n');
}]);










