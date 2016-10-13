String.format = function () {
    if (arguments.length == 0)
        return null;

    var str = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
}
Array.prototype.deleteElementByValue = function (varElement) {
    var numDeleteIndex = -1;
    for (var i = 0; i < this.length; i++) {
        // 严格比较，即类型与数值必须同时相等。
        if (this[i] === varElement) {
            this.splice(i, 1);
            numDeleteIndex = i;
            break;
        }
    }
    return numDeleteIndex;
}
var Common_Field = {};
Common_Field.imgIndex = 0;
Common_Field.imgSrc = "";
Common_Field.mousex = 0;
Common_Field.mousey = 0;
Common_Field.oldmousex = 0;
Common_Field.oldmousey = 0;
Common_Field.oldleft = 0;
Common_Field.oldtop = 0;
Common_Field.oldwidth = 0;
Common_Field.oldheight = 0;
Common_Field.img = 0;
Common_Field.IsMouseJ = false;
Common_Field.isShow = false;
Common_Field.timer = null;
Common_Field.istimer = false;
Common_Field.BindIds = new Array;
Common_Field.IsRe = false;
Common_Field.fomatFloat = function (src, pos) {
    return Math.round(src * Math.pow(10, pos)) / Math.pow(10, pos);
}
Common_Field.StopDefault = function () {
    var top = document.getElementById("div_top");
    var bottom = document.getElementById("div_bottom");
    top.addEventListener('touchmove', function (event) {
        event.preventDefault();
        event.stopPropagation();
    }, false);
    bottom.addEventListener('touchmove', function (event) {
        event.preventDefault();
        event.stopPropagation();
    }, false);

}
Common_Field.isImgBind = function (id) {
    var b = true;
    $.each(Common_Field.BindIds, function (i, n) {
        if (id == n) {
            b = false;
            return false;
        }
    });
    return b;
}
//图片滑动功能
var ImgTouch = (function ($) {
    var rightTouch = function (w) {


        var $parent = $("div.v_show");//根据当前点击元素获取到父元素
        var $v_show = $parent.find("div.v_content_list"); //寻找到“视频内容展示区域”
        var $v_content = $parent.find("div.v_content"); //寻找到“视频内容展示区域”外围的DIV元素
        var v_width = $v_content.width();
        var win_w = $(window).width();
        if (win_w != v_width) {
            $v_content.width(win_w);
            v_width = win_w;
        }
        var oldi = 0;
        OpenDivHelp.CurrentSelectImage().parent().width(win_w);
        if (!$v_show.is(":animated")) {    //判断“视频内容展示区域”是否正在处于动画
            $v_show.animate({ left: '+=' + (v_width - w) }, "fast", function () {
                oldi = Common_Field.imgIndex;
                Common_Field.imgIndex--;
                if ($(".v_content_list").offset().left != v_width * Common_Field.imgIndex) {
                    $(".v_content_list").offset({ left: "-" + (v_width * Common_Field.imgIndex) });
                }
                OpenDivHelp.SetImgIndex(oldi);
            });
        }
    }

    var leftTouch = function (w) {
        var $parent = $("div.v_show");//根据当前点击元素获取到父元素
        var $v_show = $parent.find("div.v_content_list"); //寻找到“视频内容展示区域”
        var $v_content = $parent.find("div.v_content"); //寻找到“视频内容展示区域”外围的DIV元素
        var v_width = $v_content.width();
        var win_w = $(window).width();
        if (win_w != v_width) {
            $v_content.width(win_w);
            v_width = win_w;
        }
        var oldi = 0;
        if ( !$v_show.is(":animated")) {    //判断“视频内容展示区域”是否正在处于动画

            $v_show.animate({ left: '-=' + (v_width - w) }, "fast", function () {
                oldi = Common_Field.imgIndex;
                Common_Field.imgIndex++;
                /*  if ($(".v_content_list").offset().left != v_width * Common_Field.imgIndex) {
                 $(".v_content_list").offset({ left: "-" + (v_width * Common_Field.imgIndex) });

                 }*/
                if(OpenDivHelp.BigIMgObj().length <= parseInt( Common_Field.imgIndex)){
                    Common_Field.imgIndex  = 0;
                }
                $(".v_content_list").offset({ left: "-" + (v_width * Common_Field.imgIndex) });
                OpenDivHelp.SetImgIndex(oldi);

            });  //通过改变left值，达到每次换一个版面

        }

    }

    var BeginTouch = function () {

        var tagId = "img_divList";
        var pressX = 0, pressY = 0;
        var spanX = 0, spanY = 0;
        var obj = document.getElementById(tagId);
        var direct = "none";
        var l = 0;
        var time1 = 0;
        var t = 0;
        //返回角度
        function GetSlideAngle(dx, dy) {
            return Math.atan2(dy, dx) * 180 / Math.PI;
        }

        function IsHud(le, wi) {
            if (le - wi / 2 >= 0) {
                return 1;
            }
            return 0;
        }
        //  IsHudy(objg.offset().left, objg.width(), win_w)
        function IsHudy(le, wi, w) {
            if (le + (wi - w / 2)  <= 0) {
                return 1;
            }
            return 0;

        }

        //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
        function GetSlideDirection(startX, startY, endX, endY) {
            var dy = startY - endY;
            var dx = endX - startX;
            var result = 0;
            var win_w = $(window).width();
            //如果滑动距离太短
            if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
                return result;
            }

            var angle = GetSlideAngle(dx, dy);
            if (angle >= -45 && angle < 45) {
                result = 4;
            } else if (angle >= 45 && angle < 135) {
                result = 1;
            } else if (angle >= -135 && angle < -45) {
                result = 2;
            }
            else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
                result = 3;
            }
            return result;
        }

        obj.addEventListener('touchmove', function (event) {
            // 如果这个元素的位置内只有一个手指的话
            event.preventDefault();
            event.stopPropagation();
            if (event.targetTouches.length == 1) {
                var touch = event.targetTouches[0];
                spanX = 0;
                spanY = 0;
                spanX = touch.pageX - pressX;
                spanY = touch.pageY - pressY;

                if (Math.abs(spanX) > Math.abs(spanY)) {

                    //水平方向
                    if (!ImageZooMCommon.Istouchs()) {
                        if (spanX > 0) {
                            direct = "right";//向右
                            if (Common_Field.imgIndex > 0) {
                                $(".v_content_list").offset({ left: spanX + l });
                            }

                            //rightTouch();
                            //do right function
                        } else {
                            direct = "left";//向左
                            //$(".v_content_list").offset({ left: $(".v_content_list").offset().left - 3 });\
                            if (OpenDivHelp.BigIMgObj().length > parseInt(Common_Field.imgIndex)) {
                                $(".v_content_list").offset({ left: spanX + l });
                            }
                            //leftTouch();
                            //do left function
                        }
                    }
                }
                else {
                    //垂直方向
                    if (spanY > 0) {

                        direct = "down";//向下

                        if (ImageZooMCommon.pdImageHW()) {

                            if (OpenDivHelp.CurrentSelectImage().height() > $(window).height()) {
                                OpenDivHelp.CurrentSelectImage().offset({ top: t + spanY });
                            }

                        }
                    } else {
                        direct = "up";//向上
                        if (ImageZooMCommon.pdImageHW()) {
                            if (OpenDivHelp.CurrentSelectImage().height() > $(window).height()) {
                                OpenDivHelp.CurrentSelectImage().offset({ top: t + spanY });
                            }
                        }
                    }
                }
                // 把元素放在手指所在的位置
                //  touchMove.value = direct + "(" + spanX + ';' + spanY + ")";
            }
        }, false);
        obj.addEventListener('touchstart', function (event) {

            //event.preventDefault();
            //event.stopPropagation();
            // 如果这个元素的位置内只有一个手指的话

            if (event.targetTouches.length == 1) {
                time1 = event.timeStamp;
                var touch = event.targetTouches[0];
                // 把元素放在手指所在的位置
                pressX = touch.pageX;
                pressY = touch.pageY;

                l = $(".v_content_list").offset().left;
                t = OpenDivHelp.CurrentSelectImage().offset().top;
            }
        }, false);

        obj.addEventListener('touchend', function (event) {

            //event.preventDefault();
            //event.stopPropagation();

            if (!ImageZooMCommon.Istouchs()) {
                var endX, endY;
                endX = event.changedTouches[0].pageX;
                endY = event.changedTouches[0].pageY;
                var direction = GetSlideDirection(pressX, pressY, endX, endY);
                var win_w = $(window).width();
                var objg = null;
                if (parseInt(Common_Field.imgIndex+2) >= OpenDivHelp.BigIMgObj().length) {
                    objg = $(".lastImgDiv");
                }
                else {
                    objg = OpenDivHelp.CurrentSelectImage();
                }
                switch (direction) {
                    case 0://没滑动
                        if (!ImageZooMCommon.pdImageHW()) {

                        }
                        else {
                            $(".v_content_list").offset({ left: "-" + (win_w * Common_Field.imgIndex) });
                        }
                        break;
                    case 1://向上
                        if (!ImageZooMCommon.pdImageHW()) {

                        }
                        else {
                            $(".v_content_list").offset({ left: "-" + (win_w * Common_Field.imgIndex) });
                            if (OpenDivHelp.CurrentSelectImage().height() <= $(window).height()) {
                                OpenDivHelp.CurrentSelectImage().offset({ top: ($(window).height() - OpenDivHelp.CurrentSelectImage().height()) / 2 });
                            }
                            else {
                                if (OpenDivHelp.CurrentSelectImage().offset().top > 0) {

                                    OpenDivHelp.CurrentSelectImage().offset({ top: 0 });

                                }
                                if ((Math.abs(OpenDivHelp.CurrentSelectImage().offset().top) + $(window).height()) > OpenDivHelp.CurrentSelectImage().height()) {
                                    OpenDivHelp.CurrentSelectImage().offset({ top: ($(window).height() - 0) - OpenDivHelp.CurrentSelectImage().height() });

                                }
                            }
                        }
                        break;
                    case 2://向下
                        if (!ImageZooMCommon.pdImageHW()) {

                        }
                        else {
                            $(".v_content_list").offset({ left: "-" + (win_w * Common_Field.imgIndex) });
                            if (OpenDivHelp.CurrentSelectImage().height() <= $(window).height()) {
                                OpenDivHelp.CurrentSelectImage().offset({ top: ($(window).height() - OpenDivHelp.CurrentSelectImage().height()) / 2 });
                            }
                            else {
                                if (OpenDivHelp.CurrentSelectImage().offset().top > 0) {

                                    OpenDivHelp.CurrentSelectImage().offset({ top: 0 });

                                }
                                if ((Math.abs(OpenDivHelp.CurrentSelectImage().offset().top) + $(window).height()) > OpenDivHelp.CurrentSelectImage().height()) {

                                    OpenDivHelp.CurrentSelectImage().offset({ top: ($(window).height() - 0) - OpenDivHelp.CurrentSelectImage().height() });

                                }
                            }
                        }
                        break;
                    case 3://向左
                        /* if (OpenDivHelp.BigIMgObj().length > parseInt(parseInt($("#sp_bi").text())+1)) {
                         objg =  $("#simallImgDivParent");
                         }*/
                        if (IsHudy(objg.offset().left, objg.width(), win_w) == 1 || (event.timeStamp - time1) < 200) {

                            if ( OpenDivHelp.BigIMgObj().length > parseInt( Common_Field.imgIndex)) {
                                leftTouch(Math.abs(spanX));
                            }
                        }
                        else {
                            if (!ImageZooMCommon.pdImageHW()) {

                            }
                            else {
                                if (!$(".v_content_list").is(":animated")) {
                                    if (Common_Field.imgIndex > 0) {
                                        if (OpenDivHelp.BigIMgObj().length > Common_Field.imgIndex) {
                                            $(".v_content_list").animate({ left: '-=' + spanX }, "50", function () {
                                                $(".v_content_list").offset({ left: "-" + (win_w * Common_Field.imgIndex) });
                                            });
                                        }
                                    }
                                } else {
                                    $(".v_content_list").offset({ left: "-" + (win_w * Common_Field.imgIndex) });
                                }

                            }
                        }

                        break;
                    case 4://向右
                        if (IsHud(objg.offset().left, win_w) == 1 || (event.timeStamp - time1) < 200) {
                            if (Common_Field.imgIndex > 0) {
                                rightTouch(Math.abs(spanX));
                            }
                        }
                        else {
                            if (!ImageZooMCommon.pdImageHW()) {

                            }
                            else {
                                if (!$(".v_content_list").is(":animated")) {
                                    if (Common_Field.imgIndex > 0) {
                                        $(".v_content_list").animate({ left: '-=' + spanX }, "50", function () {
                                            $(".v_content_list").offset({ left: "-" + (win_w * Common_Field.imgIndex) });
                                        });
                                    }
                                } else {
                                    $(".v_content_list").offset({ left: "-" + (win_w * Common_Field.imgIndex) });
                                }
                            }
                        }


                        break;
                    default:
                }


                //if (direct == "right") {

                //}
                //if (direct == "left") {


                //}
            }
            direct = "none";
        }, false);


    }

    return {
        Begin: function () {
            BeginTouch();
            return this;
        },
        BeginLeft: function (w) {
            leftTouch(w);
            return this;
        },
        BeginRight: function (w) {
            rightTouch(w);
            return this;
        }
    };

}(jQuery));

//图片放大缩小功能
var ImageZooMCommon = (function ($) {
    var document = window.document,
        support = {
            transform3d: ("WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix()),
            touch: ("ontouchstart" in window)
        };
    var z = null;
    function getTranslate(x, y) {
        var distX = x, distY = y;
        return support.transform3d ? "translate3d(" + distX + "px, " + distY + "px, 0)" : "translate(" + distX + "px, " + distY + "px)";
    }

    function getPage(event, page) {
        return support.touch ? event.changedTouches[0][page] : event[page];
    }

    var ImagesZoom = function () { };
    var imgq = "";

    ImagesZoom.prototype = {
        // 给初始化数据
        init: function (a, b) {
            var self = this;

            var zoomMask = document.querySelector(a),
                zoomImg = document.querySelector(b),

                imgSrc = "";
            imgq = zoomImg;
            self.buffMove = 3; //缓冲系数
            self.buffScale = 2; //放大系数
            self.finger = false; //触摸手指的状态 false：单手指 true：多手指
            self.time2 = 0;
            self._destroy();
            self.imgBaseWidth = zoomImg.offsetWidth;
            self.imgBaseHeight = zoomImg.offsetHeight;

            if (!self.imgBaseWidth) {
                zoomImg.src = $(b).attr("src");

                zoomImg.onload = function () {
                    self.imgBaseWidth = zoomImg.offsetWidth;
                    self.imgBaseHeight = zoomImg.offsetHeight;
                    self.addEventStart({
                        wrapX: zoomMask.offsetWidth,
                        wrapY: zoomMask.offsetHeight,
                        mapX: zoomImg.width,
                        mapY: zoomImg.height
                    });
                }
            }
            else {
                self.addEventStart({
                    wrapX: zoomMask.offsetWidth,
                    wrapY: zoomMask.offsetHeight,
                    mapX: zoomImg.width,
                    mapY: zoomImg.height
                });
            }


        },
        addEventStart: function (param) {
            var self = this,
                params = param || {};

            self.element = imgq;

            //config set
            self.wrapX = params.wrapX || 0; 	//可视区域宽度
            self.wrapY = params.wrapY || 0; 	//可视区域高度
            self.mapX = params.mapX || 0; 	    //地图宽度
            self.mapY = params.mapY || 0;      //地图高度

            self.outDistY = (self.mapY - self.wrapY) / 2; //图片超过一屏的时候有用

            self.width = self.mapX - self.wrapX;   //地图的宽度减去可视区域的宽度
            self.height = self.mapY - self.wrapY;   //地图的高度减去可视区域的高度

            self.element.addEventListener("touchstart", function (e) {

                self._touchstart(e);
            }, false);

            self.element.addEventListener("touchmove", function (e) {

                self._touchmove(e);
            }, false);

            self.element.addEventListener("touchend", function (e) {

                self._touchend(e);
            }, false);
        },
        // 重置坐标数据
        _destroy: function () {
            this.distX = 0;
            this.distY = 0;
            this.newX = 0;
            this.newY = 0;
        },
        // 更新地图信息
        _changeData: function () {
            this.mapX = this.element.offsetWidth; 	  //地图宽度
            this.mapY = this.element.offsetHeight;      //地图高度
            // this.outDistY = (this.mapY - this.wrapY)/2; //当图片高度超过屏幕的高度时候。图片是垂直居中的，这时移动有个高度做为缓冲带
            this.width = this.mapX - this.wrapX;   //地图的宽度减去可视区域的宽度
            this.height = this.mapY - this.wrapY;   //地图的高度减去可视区域的高度
        },
        _touchstart: function (e) {

            var self = this;
            var touchTarget = e.targetTouches.length; //获得触控点数
            Common_Field.oldmousex = OpenDivHelp.CurrentSelectImage().offset().left;
            Common_Field.oldmousey = OpenDivHelp.CurrentSelectImage().offset().top;
            self._changeData(); //重新初始化图片、可视区域数据，由于放大会产生新的计算
            time2 = e.timeStamp;
            if (touchTarget == 1) {
                // 获取开始坐标
                self.basePageX = getPage(e, "pageX");
                self.basePageY = getPage(e, "pageY");

                self.finger = false;
            } else {

                e.preventDefault();
                e.stopPropagation();
                self.finger = true;

                self.startFingerDist = self.getTouchDist(e).dist;
                self.startFingerX = self.getTouchDist(e).x;
                self.startFingerY = self.getTouchDist(e).y;
            }


        },
        _touchmove: function (e) {

            var self = this;
            var touchTarget = e.targetTouches.length; //获得触控点数

            if (touchTarget == 1 && !self.finger && !ImageZooMCommon.pdImageHW()) {
                //if ($(window).height() < OpenDivHelp.CurrentSelectImage().height()) {
                // 禁止默认事件
                e.preventDefault();
                e.stopPropagation();
                self._move(e);
                //}

            }
            if (touchTarget >= 2) {

                e.preventDefault();
                e.stopPropagation();
                self._zoom(e);
            }
        },
        _touchend: function (e) {
            var self = this;


            self._changeData(); //重新计算数据
            if (self.finger) {
                e.preventDefault();
                e.stopPropagation();


                if (OpenDivHelp.CurrentSelectImage().width() <= $(window).width()) {
                    OpenDivHelp.CurrentSelectImage().offset({ left: ($(window).width() - OpenDivHelp.CurrentSelectImage().width()) / 2 });
                }
                else {
                    if (OpenDivHelp.CurrentSelectImage().offset().left > 0) {
                        Common_Field.mousex = 0;
                        OpenDivHelp.CurrentSelectImage().offset({ left: 0 });
                    }
                    if (OpenDivHelp.CurrentSelectImage().offset().left < 0 && Math.abs(OpenDivHelp.CurrentSelectImage().offset().left) > OpenDivHelp.CurrentSelectImage().width() - $(window).width()) {
                        Common_Field.mousex = $(window).width() - OpenDivHelp.CurrentSelectImage().width();
                        OpenDivHelp.CurrentSelectImage().offset({ left: Common_Field.mousex });
                    }
                }
                if (OpenDivHelp.CurrentSelectImage().height() <= $(window).height()) {
                    OpenDivHelp.CurrentSelectImage().offset({ top: ($(window).height() - OpenDivHelp.CurrentSelectImage().height()) / 2 });
                }
                else {
                    if (OpenDivHelp.CurrentSelectImage().offset().top > 0) {
                        Common_Field.mousey = 0;
                        OpenDivHelp.CurrentSelectImage().offset({ top: Common_Field.mousey });

                    }
                    if ((Math.abs(OpenDivHelp.CurrentSelectImage().offset().top) + $(window).height()) > OpenDivHelp.CurrentSelectImage().height()) {
                        Common_Field.mousey = ($(window).height() - 0) - OpenDivHelp.CurrentSelectImage().height();
                        OpenDivHelp.CurrentSelectImage().offset({ top: Common_Field.mousey });

                    }
                }

            }
            else {
                var pageX = getPage(e, "pageX"), //获取移动坐标
                    pageY = getPage(e, "pageY");
                var a = pageY - self.basePageY;
                var b = pageX - self.basePageX;
                if (!ImageZooMCommon.pdImageHW()) {

                    if (e.timeStamp - time2 < 200 && Common_Field.imgIndex > 0 && OpenDivHelp.BigIMgObj().length > parseInt( Common_Field.imgIndex)) {
                        if (b > 0) {
                            ImgTouch.BeginRight(0);
                        }
                        if (b < 0) {
                            ImgTouch.BeginLeft(0);
                        }
                    }

                    else {
                        if ($(window).width() < OpenDivHelp.CurrentSelectImage().width()) {
                            var bo = true;
                            if (OpenDivHelp.CurrentSelectImage().offset().left > 0) {
                                if (Common_Field.oldmousex >= 0 && OpenDivHelp.CurrentSelectImage().offset().left >= $(window).width() / 2) {


                                    if (Common_Field.imgIndex > 0) {
                                        ImgTouch.BeginRight(0);
                                    }
                                    else {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        Common_Field.mousex = 0;
                                        OpenDivHelp.CurrentSelectImage().offset({ left: 0 });
                                    }
                                }
                                else {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    Common_Field.mousex = 0;
                                    OpenDivHelp.CurrentSelectImage().offset({ left: 0 });

                                }
                            }
                            if (OpenDivHelp.CurrentSelectImage().offset().left < 0 && Math.abs(OpenDivHelp.CurrentSelectImage().offset().left) > OpenDivHelp.CurrentSelectImage().width() - $(window).width()) {

                                if (Common_Field.oldmousex < 0 && Math.abs(Common_Field.oldmousex) >= OpenDivHelp.CurrentSelectImage().width() - $(window).width() && Math.abs(OpenDivHelp.CurrentSelectImage().offset().left) > OpenDivHelp.CurrentSelectImage().width() - $(window).width() / 2) {
                                    if (OpenDivHelp.BigIMgObj().length > parseInt( Common_Field.imgIndex)) {
                                        ImgTouch.BeginLeft(0);
                                    }
                                    else {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        Common_Field.mousex = $(window).width() - OpenDivHelp.CurrentSelectImage().width();
                                        OpenDivHelp.CurrentSelectImage().offset({ left: Common_Field.mousex });
                                    }
                                }
                                else {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    Common_Field.mousex = $(window).width() - OpenDivHelp.CurrentSelectImage().width();
                                    OpenDivHelp.CurrentSelectImage().offset({ left: Common_Field.mousex });
                                }
                            }
                        }
                        else {

                            OpenDivHelp.CurrentSelectImage().offset({ left: ($(window).width() - OpenDivHelp.CurrentSelectImage().width()) / 2 });
                        }
                        if ($(window).height() < OpenDivHelp.CurrentSelectImage().height()) {
                            if (OpenDivHelp.CurrentSelectImage().offset().top > 0) {
                                Common_Field.mousey = 0;
                                OpenDivHelp.CurrentSelectImage().offset({ top: Common_Field.mousey });

                            }
                            if ((Math.abs(OpenDivHelp.CurrentSelectImage().offset().top) + $(window).height()) > OpenDivHelp.CurrentSelectImage().height()) {
                                Common_Field.mousey = ($(window).height() - 0) - OpenDivHelp.CurrentSelectImage().height();
                                OpenDivHelp.CurrentSelectImage().offset({ top: Common_Field.mousey });

                            }
                        }
                        else {
                            OpenDivHelp.CurrentSelectImage().offset({ top: ($(window).height() - OpenDivHelp.CurrentSelectImage().height()) / 2 });
                        }

                    }
                    //else {
                    //    if (OpenDivHelp.CurrentSelectImage().width() <= $(window).width()) {
                    //        OpenDivHelp.CurrentSelectImage().offset({ left: ($(window).width() - OpenDivHelp.CurrentSelectImage().width()) / 2 });
                    //    }
                    //    if (OpenDivHelp.CurrentSelectImage().height() <= $(window).height()) {
                    //        OpenDivHelp.CurrentSelectImage().offset({ top: ($(window).height() - OpenDivHelp.CurrentSelectImage().height()) / 2 });
                    //    }
                    //}
                }

            }

            //if (!ImageZooMCommon.pdImageHW()) {

            //    e.preventDefault();
            //    e.stopPropagation();
            //}

        },
        _move: function (e) {
            var self = this,
                pageX = getPage(e, "pageX"), //获取移动坐标
                pageY = getPage(e, "pageY");



            // 获得移动距离

            self.distX = (pageX - self.basePageX) + self.newX;
            self.distY = (pageY - self.basePageY) + self.newY;


            self.moveX = self.distX;


            self.movePos(e);
            self.finger = false;

        },
        // 图片缩放
        _zoom: function (e) {
            var self = this;
            var nowFingerDist = self.getTouchDist(e).dist, //获得当前长度
                ratio = nowFingerDist / self.startFingerDist, //计算缩放比
                imgWidth = Math.round(self.mapX * ratio), //计算图片宽度
                imgHeight = Math.round(self.mapY * ratio); //计算图片高度

            // 计算图片新的坐标
            self.imgNewX = Math.round(self.startFingerX * ratio - self.startFingerX - self.newX * ratio);
            self.imgNewY = Math.round((self.startFingerY * ratio - self.startFingerY) / 2 - self.newY * ratio);


            if (imgWidth >= self.imgBaseWidth && imgHeight >= self.imgBaseHeight) {

                if (imgWidth <= 2 * self.imgBaseWidth) {

                    self.element.style.width = imgWidth + "px";
                    self.element.style.height = imgHeight + "px";

                    self.refresh(-self.imgNewX, -self.imgNewY, "0s", "ease");

                    Common_Field.IsMouseJ = false;
                }
                else {
                    Common_Field.IsMouseJ = true;

                }
                self.finger = true;
            } else {
                // if (imgWidth < self.imgBaseWidth || imgHeight < self.imgBaseHeight) {
                self.element.style.width = self.imgBaseWidth + "px";
                self.element.style.height = self.imgBaseHeight + "px";
                //OpenDivHelp.SetCurrentImage();
                //}
            }

            self.finger = true;
        },
        // 移动坐标
        movePos: function (e) {
            var self = this;
            self.moveY = self.distY;

            //var aa = self.moveX + Common_Field.mousex;
            //var ab = self.moveY + Common_Field.mousey;

            self.refresh(self.moveX, self.moveY, "0s", "ease");
        },

        // 重置数据
        reset: function () {
            var self = this,
                hideTime = ".2s";
            if (self.height < 0) {
                self.newY = -Math.round(self.element.offsetHeight - self.imgBaseHeight) / 2;
            } else {
                var a = Math.round((self.wrapY - self.imgBaseHeight) / 2),
                    b = self.element.offsetHeight - self.wrapY + Math.round(self.wrapY - self.imgBaseHeight) / 2;

                if (self.distY >= -a) {
                    self.newY = -a;
                } else if (self.distY <= -b) {
                    self.newY = -b;
                } else {
                    self.newY = self.distY;
                }
            }

            self.refresh(self.newX, self.newY, hideTime, "ease-in-out");
        },
        // 执行图片移动
        refresh: function (x, y, timer, type) {

            OpenDivHelp.CurrentSelectImage().offset({ left: x + Common_Field.oldmousex });
            OpenDivHelp.CurrentSelectImage().offset({ top: y + Common_Field.oldmousey });
            //this.element.style.webkitTransitionProperty = "-webkit-transform";
            //this.element.style.webkitTransitionDuration = timer;
            //this.element.style.webkitTransitionTimingFunction = type;
            //this.element.style.webkitTransform = getTranslate(x, y);


        },

        // 获取多点触控
        getTouchDist: function (e) {
            var x1 = 0,
                y1 = 0,
                x2 = 0,
                y2 = 0,
                x3 = 0,
                y3 = 0,
                result = {};

            x1 = e.touches[0].pageX;
            x2 = e.touches[1].pageX;
            y1 = e.touches[0].pageY - document.body.scrollTop;
            y2 = e.touches[1].pageY - document.body.scrollTop;

            if (!x1 || !x2) return;

            if (x1 <= x2) {
                x3 = (x2 - x1) / 2 + x1;
            } else {
                x3 = (x1 - x2) / 2 + x2;
            }
            if (y1 <= y2) {
                y3 = (y2 - y1) / 2 + y1;
            } else {
                y3 = (y1 - y2) / 2 + y2;
            }

            result = {
                dist: Math.round(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))),
                x: Math.round(x3),
                y: Math.round(y3)
            };
            return result;
        },
        eventStop: function (e) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    return {

        Zoom: function (a, b) {

            if (b) {
                if (Common_Field.isImgBind(b) || Common_Field.IsRe) {
                    z = new ImagesZoom();
                    z.init(a, b);
                    Common_Field.BindIds.push(b);
                    Common_Field.IsRe = false;
                }
            }
            return this;
        },
        ZoomReset: function () {
            if (z)
            { z.reset(); }

            return this;
        },
        pdImageHW: function () {
            var b = false;
            if (z) {
                if (!z.element.style.width) {
                    b = true;
                }
                else if (z.imgBaseWidth == z.element.style.width.replace("px", "")) {

                    b = true;
                }


            }

            return b;

        },
        Istouchs: function () {

            return z.finger;

        },
        Settouchs: function (val) {
            if (z) {
                z.finger = val;
            }
        }

    };
}(jQuery));

//图片相关html 数据加载
var OpenDivHelp = (function ($) {

    var urlPath = KFZ.sites.adapter.book;

    var bigImgJson = [];
    var newTitle = "";
    var strJson = "";
    var obj = [];

    var div_id = "div_img_";
    var bodyH = 1;
    var HtmlSoll = 0;

    var touchBind = true;
    var currentImg;
    var Hid_ShowDiv = function () {
        $(document.body).height(bodyH);
        $('html').css("overflow", "auto"); //页面body滚
        $('body').css("overflow", "auto"); //页面body滚
        $(document).scrollTop(HtmlSoll);
        $('#imgKan').hide();
        Common_Field.isShow = false;
    }
    var eventStop = function (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    var Show_HideDiv = function () {
        setTimeout(function () {
            window.scrollTo(0, 1)
        }, 0);
        HtmlSoll = $(document).scrollTop();
        $('body').css("overflow", "hidden"); //阻止页面body滚
        $('html').css("overflow", "hidden"); //阻止页面body滚
        bodyH = $(document.body).height();
        $(document.body).height(0);
        $("#imgKan").show();
        Common_Field.isShow = true;
    }

    var editImgPath = function (path, opath, j) {

        var newPath = "";
        if (opath) {
            newPath = '<img id="' + "img_" + j + '" src="' + path + '" alt="" kfz-img-err="/mobile2-0/common/images/none_330.png"  style="margin: 0 auto;vertical-align:middle;" onerror="javascript:this.src=\'' + opath + '\'" />';
        }
        else {

            newPath = '<img  id="' + "img_" + j + '" src="' + path + '" alt="" kfz-img-err="/mobile2-0/common/images/none_330.png"  style="margin: 0 auto;vertical-align:middle;" />';
        }
        return newPath;
    }

    var GetImgIndex = function (imgurl) {
        var us = imgurl.split("/");
        var u = us.pop();

        var index = 0;
        $.each(bigImgJson, function (i, n) {

            var ic = n.Path.indexOf(u);
            if (ic >= 0) {
                index = i;
                return false;
            }
        });
        return index;
    }
    var a = undefined;
    var OpenUrl = function (url) {

        window.location.href = url;
    }

    var AppEndImgDiv = function (src) {

        var win_h = $(window).height();
        var win_w = $(window).width();
        Show_HideDiv();
        Common_Field.imgIndex = 0;
        if (src) {
            Common_Field.imgIndex = GetImgIndex(src);
        }
        if (touchBind) {

            ImgTouch.Begin();
            touchBind = false;

        }
        $(".v_content_list").offset({ left: "-" + (win_w * Common_Field.imgIndex) });
        GoIndex(Common_Field.imgIndex);
    }

    //跳转图片索引
    var GoIndex = function (i) {
        var win_h = $(window).height();
        var win_w = $(window).width();
        currentImg = $($($(".v_content_list div")[i]).find("img"));
        currentImg.parent().html("");
        Common_Field.BindIds.deleteElementByValue("#" + currentImg.attr("id"));
        InsertImgToDiv(Common_Field.imgIndex, 5);
        DivHeightSet();
        if (Common_Field.timer) {
            clearTimeout(Common_Field.timer);
        }
        Common_Field.timer = setTimeout(function () { SetImgTop(); }, 500);
    }

    //设置图片高度
    var DivHeightSet = function () {
        var win_h = $(window).height();
        var win_w = $(window).width();
        if (Common_Field.imgIndex >= bigImgJson.length) {
            $("#img_divList").height(win_h);
        }
        else {
            currentImg = $($($(".v_content_list div")[Common_Field.imgIndex]).find("img"));
            Common_Field.img = currentImg;
            var img_h = currentImg.height();
            if (img_h) {
                if (win_h > img_h) {
                    $("#img_divList").height(win_h);
                }
                else {
                    $("#img_divList").height(img_h);

                }
                ImageZooMCommon.Zoom("#img_divList", "#" + currentImg.attr("id"));
                if ($("#imgKan")) {
                    $("#imgKan").scrollTop(0);
                }
                if (currentImg.height() > $(window).height()) {
                    currentImg.offset({ top: 0 });
                }
                SaveCurrentImgData();
                $(".top-box").toggle();
                $(".bottom-box").toggle();
                $(".top-box").toggle();
                $(".bottom-box").toggle();
            }
            else {
                var im = new Image();
                im.src = currentImg.attr("src");
                $(im).load(function () {
                    img_h = currentImg.height();
                    if (win_h > img_h) {
                        $("#img_divList").height(win_h);
                    }
                    else {
                        $("#img_divList").height(img_h);
                    }
                    ImageZooMCommon.Zoom("#img_divList", "#" + currentImg.attr("id"));
                    if ($("#imgKan")) {
                        $("#imgKan").scrollTop(0);
                    }
                    if (currentImg.height() > $(window).height()) {
                        currentImg.offset({ top: 0 });
                    }
                    SaveCurrentImgData();
                    $(".top-box").toggle();
                    $(".bottom-box").toggle();
                    $(".top-box").toggle();
                    $(".bottom-box").toggle();
                })
            }
            currentImg.unbind("click");
            currentImg.click(function () {
                $(".top-box").toggle();
                $(".bottom-box").toggle();
                return false;
            });
        }
        if (Common_Field.imgIndex == bigImgJson.length) {
            $("#sp_bi").html(Common_Field.imgIndex);
        }
        else {
            $("#sp_bi").html(Common_Field.imgIndex + 1);
        }
    }

    var SetImgTop = function () {
        if (currentImg.height() > $(window).height()) {
            currentImg.offset({ top: 0 });
        }
    }

    var SaveCurrentImgData = function () {
        Common_Field.oldleft = currentImg.offset().left;
        Common_Field.oldtop = currentImg.offset().top;
        Common_Field.oldwidth = currentImg.width();
        Common_Field.oldheight = currentImg.height();
    }

    var SetCurrentImgData = function () {

        currentImg.offset({ left: Common_Field.oldleft });
        currentImg.offset({ top: Common_Field.oldtop });
        currentImg.width(Common_Field.oldwidth);
        currentImg.height(Common_Field.oldheight);

    }

    //初始化弹出层
    var AppendImgDiv = function () {

        var win_h = $(window).height();
        var win_w = $(window).width();

        var h = '<div id="imgKan" style=" display:none; width:100%; position: fixed; _position:absolute; _top:expression(eval(document.documentElement.scrollTop)); left: 0; top: 0; z-index: 10001; height: 100%; overflow-y: scroll;">' +
            '<div class="top-box" id="div_top" >' +
            '<div class="top" >' +

            '<span id="a_title"></span>' +
            '<a  id="a_close" href="javascript:void(0)" class="btn-close"></a>' +
            '</div>' +
            '</div>' +
            '<div id="img_divList" class="v_show">' +
            '<div class="v_content">' +
            '<div id="img_big" class="v_content_list">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="bottom-box" id="div_bottom">' +
            '<div class="num"><strong><span id="sp_bi"></span></strong>/<span id="sp_oi"></span></div>' +
            /* '<div class="comment"><i><a id="a1_pl"></a></i></div>' +*/
            '</div>' +
            '</div>';
        $("body").append(h).find("#imgKan").hide();
        var uu = bigImgJson.length-1;
        $.each(bigImgJson, function (i, n) {
            var id = div_id + i;
            if(i == uu){
                $("#img_big").append("<div style='float: left;'  id='" + id + "'  class='lastImgDiv'>" + i + "</div>");
            }else{
                $("#img_big").append("<div style='float: left;'  id='" + id + "'>" + i + "</div>");
            }
            // $("#img_big").append("<div style='float: left;'  id='" + id + "'>" + i + "</div>");
        });
        $("#img_big div").height(win_h);
        $("#img_big div").css("line-height", win_h + "px");
        // $("#img_big").append("<div style='float: left;' ><div class='last-page' id='simallImgDivParent'><p class='tip-last'>最后一页喽~</p><ul class='btn-area'><li id='li_again'><a>再看一遍</a></li><li><a id='a_p2' href='#'></a></li></ul><div class='others'><div id='div_cn' class='others-tt'>猜你喜欢</div></div><div class='pic-txt'  id='simallImgDiv' style='padding-left:0; padding-right:0;'>"  + "</div></div></div>");
        setInitWidth();
        $("#img_divList").click(function () {
            OpenDivHelp.HideDiv();
            return false;
        });
        $("#a_close").click(function () {
            OpenDivHelp.HideDiv();
        });
        touchBind = true;
        Common_Field.StopDefault();
    }

    var setInitWidth = function () {
        var win_h = $(window).height();
        var win_w = $(window).width();
        if ($("#imgKan").length > 0) {
            $(".v_content_list div").width(win_w);
            $(".v_content").width(win_w);
            $(".v_content_list").width(win_w * (bigImgJson.length + 1));
        }

    }

    //加载图片
    var InsertImgToDiv = function (i, q) {
        if (i >= 0) {

            var a = i - q > 0 ? i - q : 0;
            var b = i + q;
            for (j = a; j <= b; j++) {
                if (j >= 0) {
                    if ($("#" + div_id + j).find("img").length == 0) {

                        if (bigImgJson[j]) {
                            $("#" + div_id + j).html(editImgPath(bigImgJson[j].Path, null, j));
                        }
                    }
                }
            }
        }
    }
    //图片json事件初始化 只执行一次
    var BindImgCssClick = function () {
        if (obj.OriginalPicPath.length > 0) {
            bigImgJson = obj.OriginalPicPath; //图片数据
            newTitle = obj.FaceTitle;
        }
    }
    //图片数据绑定 只执行一次
    var InitShowData = function (i) {
        $("#sp_bi").html("1");
        $("#sp_oi").html(bigImgJson.length);
        $("#a_title").html(newTitle);
        $("#a_title").unbind("click");
        $("#a_title").click(function () {
            //OpenUrl(window.location.href);
            OpenDivHelp.HideDiv();
            return false;
        });
    }


    //给图片绑定click事件 只执行一次
    var BindImgInit = function () {
        var e = $("#allImg").find("img");
        $.each(e, function (i, n) {
            if ($(n).parent().get(0).tagName == "A") {
                var u = $(n).parent().attr("href");
                if (jQuery.type(u) === "string") {
                    var b = u.split(".");
                    var c = b.pop();
                    if (c == "jpg" || c == "jpeg" || c == "gif" || c == "png" || c == "bmp") {
                        ImgClickOpen($(n));
                    }
                }
            }
            else {
                ImgClickOpen($(n));
            }

        });

    }

    //图片单击事件
    var ImgClickOpen = function (e) {
        e.unbind("click");
        e.parent("a").removeAttr("href").removeAttr("target");
        e.css({ cursor: "pointer" }).click(function () {
            if (strJson != "") {
                BindImgCssClick();
                AppendImgDiv();
                InitShowData();
                strJson = "";
            }
            AppEndImgDiv($(this).attr("src"));
            $(".top-box").show();
            $(".bottom-box").show();
        });
    }


    return {
        InitDiv: function () {
            /* var data = {"Title":"奇瑞瑞虎7谍照曝光或将于8月份首发",
             "OriginalPicPath":
             [
             { "Path":"http://www.kfzimg.com/G03/M01/4C/3B/pYYBAFY9unyABiDMAAB0CS1Yyag910_b.jpg"},
             { "Path":"http://www.kfzimg.com/G03/M00/4C/3B/pYYBAFY9unyAS3t-AAByQz5HUAw842_b.jpg"},
             { "Path":"http://neibuwww.kongfz.cn/data/pre_show_pic/20160111/5256121/kpVLRA9HDE_b.jpg"},
             { "Path":"http://www.kfzimg.com/G00/M00/14/C2/oYYBAFSGvKyAUAcOAABgNWoIIXA651_b.jpg"}
             ]
             };
             strJson = data;
             obj = strJson;
             if (obj && obj.OriginalPicPath.length > 0) {
             BindImgInit();
             }*/
            var url = $("#allImg").attr("url");
            $.ajax({
                url: url,
                type: "get",
                cache: false,
                scriptCharset: "utf-8",
                success: function (res) {
                    //console.log(res);
                    var res =  JSON.parse(res);
                    strJson = res.data;
                    if(strJson){
                        obj =strJson;
                        if (obj && obj.OriginalPicPath.length > 0) {
                            BindImgInit();
                        }
                    }
                }
            });
        },
        Open: function (url, e) {
            OpenUrl(url);
            return this;
        },
        HideDiv: function () {
            Hid_ShowDiv();
            return this;
        }
        ,
        SetImgIndex: function (i) {
            GoIndex(i);
            return false;
        },
        Insert: function (i, q) {
            InsertImgToDiv(i, q);
            return this;
        },
        BigIMgObj: function () {
            return bigImgJson;
        },
        CurrentSelectImage: function () {
            return currentImg;
        },
        SetCurrentImage: function () {
            SetCurrentImgData();
            return this;
        },
        SetCurrentWidth: function () {
            setInitWidth();
            return this;
        },
        BindPageImg: function () {
            BindImgInit();
        },
        ReInit: function () {
            Common_Field.IsRe = true;
            AppendImgDiv();
            InitShowData();
            AppEndImgDiv(Common_Field.img.attr("src"));
            $(".top-box").show();
            $(".bottom-box").show();
            Common_Field.BindIds = [];
            ImageZooMCommon.Settouchs(false);
            return this;
        }
    };
}(jQuery));



jQuery(function () {
    OpenDivHelp.InitDiv();
    function orientationChange() {
        if ($("#imgKan").length > 0) {
            if (!$("#imgKan").is(":hidden")) {
                OpenDivHelp.HideDiv();
                $("#imgKan").remove();
                setTimeout(function () { OpenDivHelp.ReInit(); }, 1000);
            }
        }
    };
    orientationChange();
    window.onorientationchange = orientationChange;

})


