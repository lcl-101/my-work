$(function(){
    //我的资产
    $('#tip').hover(function () {
        $('.dialog').stop(true, false).show();
    }, function () {
        $('.dialog').stop(true, false).hide();
    });

    function toNumber(strNumber) {
        return +strNumber;
    }
    var datas = '';
    var propertyValues1 = toNumber($('#AvlBal').val());
    var propertyValues2 = toNumber($('#DaishouBenjin').val());
    var propertyValues3 = toNumber($('#FrzBal').val());
    var propertyValue = $('#property-value').val();
    if (propertyValue == '0') {
        datas = 1;
    } else {
        datas = -1;
    }
    var data1 = datas >= 0 ? 0 : propertyValues1;
    var data2 = datas >= 0 ? 0 : propertyValues2;
    var data3 = datas >= 0 ? 0 : propertyValues3;
    dataquan(data1, data2, data3, propertyValue);
    function dataquan(data1, data2, data3, value) {
        var datacolor = [];
        var data = [];
        if (!!data1 == false && !!data2 == false && !!data3 == false) {
            datacolor = ['#dbdbdb'];
            data = [['账户总资产', parseFloat(0.00000001)]];
        } else {
            datacolor = ['#ff9800', '#8bdc5d', '#ff5736'];
            data = [['可用余额', toNumber(data1)], ['理财资产', toNumber(data2)], ['冻结资金', toNumber(data3)]];
        }
        $('#container').highcharts({
            chart: {
                type: 'pie',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                backgroundColor: 'rgba(0,0,0,0)'//背景透明
            },
            title: {
                text: '<span style="font-size: 18px;color: #999999;">账户总资产</span><br/><span style="font-size: 20px;color: #ff2b01;">' + value + '</span>',
                floating: true
            },
            subtitle: {
                text: ''
            },
            plotOptions: {
                pie: {
                    innerSize: 100,
                    depth: 45
                }
            },
            series: [{
                name: [''],
                data: data,
                size: '80%',
                innerSize: '84%'
            }],
            colors: datacolor
        }, function (c) {
            var centerX = c.series[0].center[0];
            var centerY = c.series[0].center[1];
            // 标题字体大小，返回类似 16px ，所以需要 parseInt 处理
            var titleHeight = parseInt(c.title.styles.fontSize);
            // 设置图表偏移
            c.setTitle({
                y: centerY + titleHeight / 4
            });
        });
    }
    $('.tips').hover(function () {
        var index = $('.tips').index(this);
        $('.property-tishi').stop(false, true).eq(index).fadeIn();
    }, function () {
        var i = $('.tips').index(this);
        $('.property-tishi').stop(false, true).eq(i).fadeOut();
    });
    $('.property-tip').hover(function () {
        $('.property-tip-show').stop(false, true).fadeIn();
    }, function () {
        $('.property-tip-show').stop(false, true).fadeOut();
    });
    //我的投资
    $('.investment-link img').hover(function () {
        $('.investment-link img')[0].src = '../../images/UserAccount/jiantous.png';
    }, function () {
        $('.investment-link img')[0].src = '../../images/UserAccount/jiantou.png';
    });

    for (var i = 0; i <= $('.investment-bottom-content li').length; i++) {
        if (i % 2 != 0) {
            $('.investment-bottom-content li').eq(i).css({background: '#efeff3'});
        }
    }
});