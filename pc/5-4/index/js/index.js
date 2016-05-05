$(function(){
    $('#tip').hover(function(){
        $('.dialog').stop(true,false).show();
    },function(){
        $('.dialog').stop(true,false).hide();
    });

    var datas=-1;
    var data1=datas>=0?"100":"10";
    var data2=datas>=0?"0":"120";
    var data3=datas>=0?"0":"12";
    var data4=datas>=0?"0":"10";

    function dataquan(data1,data2,data3,data4){
        $('#container').highcharts({
            chart: {
                type: 'pie',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                backgroundColor: 'rgba(0,0,0,0)'//背景透明
            },
            title: {
                text: '<span style="font-size: 18px;color: #999999;">账户总资产</span><br/><span style="font-size: 18px;color: #333333;">0.00</span>',
                floating:true
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
                data: [['1',parseInt(data1) ],['2',parseInt(data2)],['3',parseInt(data3)],['4',parseInt(data4)]],
                size: '80%',
                innerSize: '84%'
            }],
            colors:['#ff9800','#8bdc5d','#ff5736','#64bbf6'],
            tooltip: {
//            backgroundColor: '#FCFFC5',   // 背景颜色
//            borderColor: 'black',         // 边框颜色
//            borderRadius: 10,             // 边框圆角
//            borderWidth: 3,               // 边框宽度
////            shadow: ture,                 // 是否显示阴影
//            animation: true,               // 是否启用动画效果
//            style: {                      // 文字内容相关样式
//                color: "#ff0000",
//                fontSize: "12px",
//                fontWeight: "blod",
//                fontFamily: "Courir new"
//            }
            }
        },function(c){
            var centerX = c.series[0].center[0];
            var centerY = c.series[0].center[1];
            // 标题字体大小，返回类似 16px ，所以需要 parseInt 处理
            var titleHeight = parseInt(c.title.styles.fontSize);
            // 设置图表偏移
            c.setTitle({
                y: centerY + titleHeight/4
            });
        });
    }
    dataquan(data1,data2,data3,data4);
});