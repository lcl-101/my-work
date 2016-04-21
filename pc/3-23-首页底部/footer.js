/**
 * 左补齐字符串
 *
 * @param nSize
 *            要补齐的长度
 * @param ch
 *            要补齐的字符
 * @return
 */
String.prototype.padLeft = function (nSize, ch) {
        var len = 0;
        var s = this ? this : "";
        ch = ch ? ch : '0';// 默认补0

        len = s.length;
        while (len < nSize) {
                s = ch + s;
                len++;
        }
        return s;
}
/**
 * 右补齐字符串
 *
 * @param nSize
 *            要补齐的长度
 * @param ch
 *            要补齐的字符
 * @return
 */
String.prototype.padRight = function (nSize, ch) {
        var len = 0;
        var s = this ? this : "";
        ch = ch ? ch : '0';// 默认补0

        len = s.length;
        while (len < nSize) {
                s = s + ch;
                len++;
        }
        return s;
}
/**
 * 左移小数点位置（用于数学计算，相当于除以Math.pow(10,scale)）
 *
 * @param scale
 *            要移位的刻度
 * @return
 */
String.prototype.movePointLeft = function (scale) {
        var s, s1, s2, ch, ps, sign;
        ch = '.';
        sign = '';
        s = this ? this : "";

        if (scale <= 0) return s;
        ps = s.split('.');
        s1 = ps[0] ? ps[0] : "";
        s2 = ps[1] ? ps[1] : "";
        if (s1.slice(0, 1) == '-') {
                s1 = s1.slice(1);
                sign = '-';
        }
        if (s1.length <= scale) {
                ch = "0.";
                s1 = s1.padLeft(scale);
        }
        return sign + s1.slice(0, -scale) + ch + s1.slice(-scale) + s2;
}
/**
 * 右移小数点位置（用于数学计算，相当于乘以Math.pow(10,scale)）
 *
 * @param scale
 *            要移位的刻度
 * @return
 */
String.prototype.movePointRight = function (scale) {
        var s, s1, s2, ch, ps;
        ch = '.';
        s = this ? this : "";

        if (scale <= 0) return s;
        ps = s.split('.');
        s1 = ps[0] ? ps[0] : "";
        s2 = ps[1] ? ps[1] : "";
        if (s2.length <= scale) {
                ch = '';
                s2 = s2.padRight(scale);
        }
        return s1 + s2.slice(0, scale) + ch + s2.slice(scale, s2.length);
}
/**
 * 移动小数点位置（用于数学计算，相当于（乘以/除以）Math.pow(10,scale)）
 *
 * @param scale
 *            要移位的刻度（正数表示向右移；负数表示向左移动；0返回原值）
 * @return
 */
String.prototype.movePoint = function (scale) {
        if (scale >= 0)
                return this.movePointRight(scale);
        else
                return this.movePointLeft(-scale);
}


$(document).ready(function () {
        $("#borrowAmount").on('blur', showBorrowAmountBlur);
        $("#yearRate").on('blur', showYearRateBlur);
        $("#borrowDate").on('blur', showBorrowDateBlur);
        $("#newstart").on('click', checkAll);

        $(".repaymeans").on('click', function () {
                $(this).addClass('repaymeans_click').siblings().removeClass('repaymeans_click');
                var val = $(this).attr('data-value');
                switch (val) {
                        case "dqbx":
                                $(".soption-value").html("日");
                                break;
                        case "debx":
                                $(".soption-value").html("月");
                                break;
                        case "rxb":
                                $(".soption-value").html("日");
                                break;
                        default:
                                $(".soption-value").html("日");
                                break;
                }
                $('.repaymeans').val(val);
        });
        $('.repaymeans').first().trigger('click');
        $("input[type='reset']").on('click', function () {
                $('.repaymeans').first().trigger('click');
                $('.tip_error').html('');
                $('.earnings_font').html('');
                $('.earnings_dian').html('');
        })


        /*非计算器部分开始*/
        $('.message').hover(function () {
                var index = $('.message').index(this);
                $('.message span').eq(index).stop(true, false).animate({right: '0px', opacity: 1}, 600);
                $('.about-img3').css('z-index', '9').find('.about-left').animate({
                        right: '-200px',
                        opacity: 0
                }, 600);
        }, function () {
                $('.message1').animate({right: '-300px', opacity: 0}, 600);
        });

        // firefox兼容
        // $("#copy-button").mouseleave(function (e) {
        //         $('#copy-button').animate({right: '-300px', opacity: 0}, 600);
        // });
        $('.about-img4').hover(function () {
                $('body').css({'overflow-x': 'hidden'});
        }, function () {
                $('body').css({'overflow-x': 'visible'});
        })

        // 回到顶部按钮状态
        if ($(window).scrollTop() <= 500) {
                $(".about-img1").hide();
        }
        $(window).scroll(function () {
                if ($(this).scrollTop() >= 500) {
                        $(".about-img1").show();
                } else {
                        $(".about-img1").hide();
                }
        });
        var scroll_top = setInterval(scrollcontrol, 500);
        $('.about-img1').on('click', function () {
                $("body,html").animate({scrollTop: 0});
        });
        $('.about-img3').hover(function () {
                $('.about-left').stop(true, false).animate({right: 0, opacity: 1}, 600);
        }, function () {
                $('.about-left').animate({right: '-200px', opacity: 0}, 600);
        });
        $('.about-img5').hover(function () {
                $('.about-img5').css('z-index', '5').find('.about-computer').stop(true, false).animate({
                        right: '40px',
                        opacity: 1
                }, 600);
        }, function () {
                $('.about-computer').animate({right: '-300px', opacity: 0}, 600);
        });

        //复制
        if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0"){
            $('#copy-buttons').on('click',function(){
                alert('请手动复制QQ群号');
            })
        }else {
            var btn = document.getElementById('copy-buttons');
            var clipboard = new Clipboard(btn);
            clipboard.on('success', function(e) {
                alert('内容已复制到剪贴板');
            });

            clipboard.on('error', function(e) {
                alert('请重新复制');
            });
        }
      
        function scrollcontrol() {
                if ($(this).scrollTop() >= 500) {
                        $(".about-img1").show();
                } else {
                        $(".about-img1").hide();
                }
        }

        var imEle = document.getElementById("enan");
        imEle.onclick = function () {
                window.open("http://wangcaigu.udesk.cn/im_client?cur_url=" + escape(location.href) + "&pre_url=" + escape(document.referrer), "udesk_im", "width=780,height=560,top=200,left=350,resizable=yes");
        };

        /*非计算器部分结束*/
});

var hkfs = 0; //还款方式
var resetFlag2 = 0, resetFlag1 = 0, resetFlag3 = 0;

function num2(numStr) {
        var nStr = [], nStr1;
        nStr = String(numStr).split('.');
        if (nStr[1] === undefined) {
                nStr1 = nStr[0] + '.00'
        } else if (nStr[1].length == 1) {
                nStr1 = nStr[0] + '.' + nStr[1].substring(0, 1) + '0';
        } else {
                nStr1 = nStr[0] + '.' + nStr[1].substring(0, 2);
        }
        return nStr1;
}

function showBorrowAmountBlur(idStr) {
        var that = $('#borrowAmount');
        var thatval = $('#borrowAmount').val();
        var par = /^[0-9]+$/
        if (!thatval || thatval == '') {
                $('#tip_error').html('请输入理财金额');
                resetFlag1 = 2;
                return false;
        } else if (!par.test(thatval)) {
                $('#tip_error').html('金额输入有误');
                resetFlag1 = 2;
                return false;
        } else if (thatval <= 0 || thatval > 10000000) {
                $('#tip_error').html('输入范围：1-10000000');
                resetFlag1 = 2;
                return false;
        } else {
                $('#tip_error').html('');
                resetFlag1 = 1;
                return true;
        }
}

function showYearRateBlur() {
        var that = $('#yearRate');
        var thatVal = $('#yearRate').val();
        var reg = /^\d{1,3}(\.\d{1,2})?$/;
        if (thatVal == '') {
                $('#tip_error').html('请输入年化收益');
                resetFlag2 = 2;
                return false;
        } else if (thatVal < 1.00 || thatVal > 100.00 || !reg.test(thatVal)) {
                $('#tip_error').html('年化收益输入错误');
                resetFlag2 = 2;
                return false;
        } else {
                $('#tip_error').html('');
                resetFlag2 = 1;
                return true;
        }
}

function showBorrowDateBlur() {
        var that = $('#borrowDate');
        var thatVal = $('#borrowDate').val();
        var thatType = $('.soption-value').html();
        var reg = /^\d+$/
        if (thatVal == '') {
                $('#tip_error').html('请输入借款期限');
                resetFlag3 = 2;
        } else if (!reg.test(thatVal)) {
                $('#tip_error').html('借款期限格式有误');
                resetFlag3 = 2;
        } else {
                $('#borrowDate').removeClass().addClass('true_info').attr('data-error', '');
                $('#tip_error').html('');
                resetFlag3 = 1;
                return true;
        }
}

function dqbx_jsq(benjin, data_lilvy, qixian) {
        //年利率
        var lilvy = Number(data_lilvy) / 100;
        //利息合计
        var lxhj = (benjin * lilvy * qixian / 360).toFixed(2);
        splitstruing(lxhj);
}

function debx_jsq(benjin, data_lilvy, qixian) {
        var lilvy = Number(data_lilvy) / 100, //年化收益
            lilvm,//月利率
            lilvm_out,//月利率输出值
            ybx,//月本息
            ybx_out,//月本息输出
            lxhj,//利息合计
            bxhj;//本息合计
        lilvm = lilvy / 12;
        lilvm_out = (lilvy / 12).toFixed(2);
        ybx = (benjin * lilvm * Math.pow(1 + lilvm, qixian)) / (Math.pow(1 + lilvm, qixian) - 1);
        ybx_out = ybx.toFixed(2);
        bxhj = (ybx_out * qixian).toFixed(2);
        lxhj = (bxhj - benjin).toFixed(2);
        splitstruing(lxhj);
}

function rxb_jsq(benjin, data_lilvy, qixian) {
        var lilvy = Number(data_lilvy), //年利率
            rlx, //每日回收利息
            lxhj,//利息合计
            rlx_n,
            bxhj;//本息合计

        rlx = num2((benjin * (lilvy / 360)).toString().movePoint(-2));
        rlx_n = rlx.toString().movePoint(2);
        //bxhj = num2(Number((rlx_n * qixian).toString().movePoint(-2)) + benjin);
        lxhj = num2((rlx_n * qixian).toString().movePoint(-2));
        splitstruing(lxhj);
}
function splitstruing(data) {
        if (data.indexOf(".") != -1) {
                var strs = data.split(".");
                $('.earnings_font').html(strs[0] + '.');
                $('.earnings_dian').html(strs[1]);
        } else {
                $('.earnings_font').html(data);
        }
}

function checkAll() {
        var first_step = showBorrowAmountBlur();

        if (first_step) {
                var second_step = showYearRateBlur();
        } else {
                return false;
        }
        if (second_step) {
                var third_step = showBorrowDateBlur();
        } else {
                return false;
        }

        if (third_step) {
                if (resetFlag2 == 2 || resetFlag2 == 0 || resetFlag1 == 2 || resetFlag1 == 0 || resetFlag3 == 2 || resetFlag3 == 0) {
                        return false;
                } else if (resetFlag2 == 1 && resetFlag1 == 1 && resetFlag1 == 1) {
                        hkfs = $('.repaymeans').val();
                        var benjin = Number($('#borrowAmount').val()),//出借金额
                            lilvy = Number($('#yearRate').val()), //年化收益
                            qixian = Number($('#borrowDate').val());//借款期限
                        var thatType = $('.soption-value').html();
                        if (hkfs == 'dqbx') {
                                dqbx_jsq(benjin, lilvy, qixian);
                        } else if (hkfs == 'debx') {
                                debx_jsq(benjin, lilvy, qixian);
                        } else if (hkfs == 'rxb') {
                                rxb_jsq(benjin, lilvy, qixian);
                        }
                }
        } else {
                return false;
        }
}



