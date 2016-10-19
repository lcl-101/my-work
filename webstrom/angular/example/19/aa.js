// lazyload/*/lazyload-78ffb0b.js
!function () {
    function t(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function e(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function n(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    var o = "util@*", r = "events@*", i = "zepto@*", a = "lazyload@*/index.js", c = {
        util: o,
        events: r,
        zepto: i
    }, s = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        return function (e, n, o) {
            return n && t(e.prototype, n), o && t(e, o), e
        }
    }();
    define(a, [o, r, i], function (o, r, i, a, c) {
        "use strict";
        function u(t) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            return e.attr = e.attr || p.attr, e.threshold = e.threshold || p.threshold, e.container = f(e.container || window), new d(t, e)
        }

        i.exports = u, u.Lazyload = d;
        var l = (o("util"), o("events")), h = l.EventEmitter, f = o("zepto"), p = {
            threshold: 100,
            attr: "data-lazy"
        }, d = function (o) {
            function r(n, o) {
                t(this, r);
                var i = e(this, Object.getPrototypeOf(r).call(this));
                return i.nodes = [], i.options = o, i.check = i.check.bind(i), i._create(), i.add(n), i
            }

            return n(r, o), s(r, [{
                key: "add", value: function (t) {
                    var t = f(t);
                    return this.nodes = this.nodes.concat(t.get().map(function (t) {
                        return f(t)
                    })), this.check(), this
                }
            }, {
                key: "check", value: function () {
                    var t = this, e = this.options.container.height() + this.options.container.scrollTop(), n = this.nodes;
                    this.nodes = n.filter(function (n) {
                        if (!t._in_viewport(n, e))return !0;
                        var o = t.listenerCount("show");
                        return o > 0 ? void t.emit("show", n[0]) : void t._reveal(n)
                    }), n.length = 0
                }
            }, {
                key: "_in_viewport", value: function (t, e) {
                    return t.offset().top - this.options.threshold < e
                }
            }, {
                key: "_reveal", value: function (t) {
                    var e = this, n = t.attr(this.options.attr);
                    t.on("load", function () {
                        e.emit("loaded", t[0])
                    }), t.attr("src", n)
                }
            }, {
                key: "_create", value: function () {
                    this.options.container.on("scroll", this.check).on("resize", this.check)
                }
            }]), r
        }(h)
    }, {main: !0, map: c})
}();

// xhs-tag/*/xhs-tag-434b59a.js
!function () {
    function e(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    var t = "zepto@*", n = "xhs-tag@*/lib/image-tag.js", o = "xhs-tag@*/lib/tag.js", i = "xhs-tag@*/index.js", a = {
        zepto: t,
        "./lib/image-tag": n,
        "./tag": o
    }, r = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
        }
    }();
    define(i, [t, n], function (e, t, n, o, i) {
        "use strict";
        var a = e("zepto"), r = e("./lib/image-tag"), s = 4, d = 30;
        n.exports.render = function (e, t) {
            var n = a(e), o = r({logo_radius: s, node_radius: d});
            o.render(n, t)
        }
    }, {main: !0, map: a}), define(n, [t, o], function (t, n, o, i, a) {
        "use strict";
        function s(e) {
            if (0 === e.length)return [];
            var t = [];
            return e.forEach(function (e) {
                var n = {position: {x: null, y: null}, nodes: {}};
                e.forEach(function (e) {
                    "center" === e.type ? n.position = e.position : n.nodes[e.type] = {angle: e.angle, text: e.name}
                }), n.nodes.brand && n.nodes.good && (n.nodes["brand-goods"] = d(n.nodes.brand, n.nodes.good), delete n.nodes.brand, delete n.nodes.good), n.nodes.currency && n.nodes.price && (n.nodes["currency-price"] = d(n.nodes.price, n.nodes.currency), delete n.nodes.currency, delete n.nodes.price), n.nodes.location && n.nodes.destination && (n.nodes["location-destination"] = d(n.nodes.destination, n.nodes.location), delete n.nodes.location, delete n.nodes.destination), t.push(n)
            }), t
        }

        function d(e, t) {
            return {angle: e.angle, text: e.text + t.text}
        }

        function l(e) {
            var t = window.devicePixelRatio || 1, n = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
            return t / n
        }

        var c = t("zepto"), h = t("./tag");
        o.exports = function (e) {
            return new u(e)
        };
        var u = function () {
            function t(n) {
                e(this, t), this.logo_radius = n.logo_radius || 5, this.node_radius = n.node_radius || 30, this.tag_formatter = n.tag_formatter || s
            }

            return r(t, [{
                key: "render", value: function (e, t) {
                    var n = this, o = this._create_context(e), i = this.tag_formatter(t);
                    i.forEach(function (t) {
                        var i = new h(t);
                        i.render(o, e, n.logo_radius, n.node_radius)
                    })
                }
            }, {
                key: "_create_context", value: function (e) {
                    var t = c(e), n = document.createElement("canvas");
                    n.width = t.width(), n.height = t.height(), c(n).css({position: "absolute", top: "0"}), t.append(n);
                    var o = n.getContext("2d"), i = l(o);
                    if (1 !== i) {
                        var a = n.width, r = n.height;
                        n.width = a * i, n.height = r * i, n.style.width = a + "px", n.style.height = r + "px", o.scale(i, i)
                    }
                    return o
                }
            }]), t
        }()
    }, {map: a}), define(o, [t], function (t, n, o, i, a) {
        "use strict";
        var s = t("zepto"), d = function () {
            function t(n) {
                e(this, t), this.x = n.x || 0, this.y = n.y || 0
            }

            return r(t, [{
                key: "adjust", value: function (e, t) {
                    var n = this.x;
                    return this.x > t - e ? n = t - e : this.x < e && (n = e), {x: n, y: this.y}
                }
            }]), t
        }();
        o.exports = function () {
            function t(n) {
                e(this, t), this.center = new d(n.position), this.nodes = n.nodes
            }

            return r(t, [{
                key: "render", value: function (e, t, n, o) {
                    var i = s(t), a = i.width(), r = i.height();
                    e.save();
                    var d = this.center.adjust();
                    e.translate(d.x * a, d.y * r);
                    for (var l in this.nodes) {
                        var c = this.nodes[l], h = o * Math.cos(2 * c.angle * Math.PI / 360), u = o * Math.sin(2 * c.angle * Math.PI / 360), f = e.measureText(c.text).width;
                        24 >= f && (f = 24);
                        var g = Math.abs(c.angle) <= 90 ? 1 : -1;
                        e.textAlign = Math.abs(c.angle) <= 90 ? "start" : "end", 0 != c.angle && 180 != c.angle || (h = u = 0), e.beginPath(), e.strokeStyle = "#FFFFFF", e.shadowOffsetX = .3, e.shadowOffsetY = 1, e.shadowBlur = 0, e.shadowColor = "rgba(0, 0, 0, 0.3)", e.lineWidth = 1, e.moveTo(0, 0), e.lineTo(h, u), e.lineTo(h + g * (f + 34), u), e.stroke(), e.closePath(), e.font = "normal 12px Arial", e.fillStyle = "#FDFDFD", e.textBaseline = "bottom", e.shadowOffsetX = 1, e.shadowOffsetY = 1.5, e.shadowBlur = 0, e.shadowColor = "rgba(0, 0, 0, 0.5)", e.fillText(c.text, h + 14 * g, u - 3)
                    }
                    e.beginPath(), e.moveTo(0, 0), e.arc(0, 0, 2 * n, 0, 2 * Math.PI, !1), e.fillStyle = "rgba(0, 0, 0, 0.1)", e.fill(), e.closePath(), e.beginPath(), e.moveTo(0, 0), e.fillStyle = "#FDFDFD", e.arc(0, 0, n, 0, 2 * Math.PI, !1), e.fill(), e.closePath(), e.restore()
                }
            }]), t
        }()
    }, {map: a})
}();

// mobile-discovery/*/item-a045060.js
!function () {
    var o = "zepto@*", i = "ajax@*", e = "cookie@*", n = "browser@*", a = "legacy-dialog@*", t = "xhs-tag@*", l = "xhs-weixin@*", r = "lazyload@*", d = "mobile-discovery@*/item/download-dialog.ejs", c = "mobile-discovery@*/item/img/download_img.jpg", g = "mobile-discovery@*/item/img/arrow.png", s = "mobile-discovery@*/item.js", m = {
        zepto: o,
        ajax: i,
        cookie: e,
        browser: n,
        "legacy-dialog": a,
        "xhs-tag": t,
        "xhs-weixin": l,
        lazyload: r,
        "./item/download-dialog.ejs": d,
        "./item/img/download_img.jpg": c,
        "./item/img/arrow.png": g
    };
    define(s, [o, i, e, n, a, t, l, r, d], function (o, i, e, n, a) {
        "use strict";
        function t(o) {
            var i = g("dl_td");
            i && r(i), s.weixin() && o.share_info && u.share_all(o.share_info), v("img.lazyload", {attr: "data-src"}), v("img.b_lazyload", {attr: "data-src"}).on("loaded", function (i) {
                var e = c(i).attr("data-index"), n = o.tags[e];
                n && 0 !== n.length && w.render(c(".j_image_list").eq(e), n)
            }), l()
        }

        function l() {
            c("#note_item_btn").on("click", function () {
                c(this).toggleClass("open"), c("#note_item").toggleClass("open")
            })
        }

        function r(i) {
            d(function () {
                var e = new m({close_by_mask: !1});
                window.addEventListener("touchmove", function (o) {
                    o.preventDefault()
                });
                var n = o("./item/download-dialog.ejs"), a = o.resolve("./item/img/download_img.jpg"), t = c(n({download_img: a}));
                t.on("click", function () {
                    window.location = [location.protocol, "//lnk8.cn/", i].join("")
                }), e.content(t), e.open()
            })
        }

        function d(o) {
            var i = setInterval(function () {
                var e = new Date;
                e - G_time > f && (o(), clearInterval(i))
            }, 100)
        }

        var c = o("zepto"), g = (o("ajax"), o("cookie")), s = o("browser"), m = o("legacy-dialog"), w = o("xhs-tag"), u = o("xhs-weixin"), v = o("lazyload"), f = 3e3;
        o.resolve("./item/img/arrow.png");
        e.exports = t
    }, {map: m}), define(d, [], function (o, i, e, n, a) {
        function t(o, i, e, n) {
            "use strict";
            function a(o) {
                return t[o] || o
            }

            i = i || function (o) {
                    return void 0 == o ? "" : String(o).replace(l, a)
                };
            var t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&#34;",
                "'": "&#39;"
            }, l = /[&<>'"]/g, r = [], d = r.push.bind(r);
            return d("<div id='download_dialog'>\n<img src='"), d(i(o.download_img)), d("' />\n</div>"), r.join("")
        }

        e.exports = t
    })
}();