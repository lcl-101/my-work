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
                text: '<span style="font-size: 18px;color: #999999;">账户总资产 </span><br/><span style="font-size: 18px;color: #333333;">0.00</span>',
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

    //上传头像
    $('#inputImage').fileupload({
        /* ... */
        dataType: 'json',
        done: function (e, data) {

        }
    })

    $('.setImg-btn').on("click",function(){
        $('#inputImage').trigger('click');
        $('#inputImage').change(function(){
            $('#loading').show();
        });

    });
    var headImg=$('#headImg');
    $('#setImg').cropper({
        aspectRatio: 1,
        viewMode: 1,
        dragCrop:false,
        zoomable:false,
        touchDragZoom:false,
        mouseWheelZoom:false,
        preview:headImg,
        built: function () {
            croppable = true;
        },
        crop: function(data) {
            //alert(data);
            console.log(data);
            // 出来裁切后的图片数据.
        }
    });

    $('.headphoto a').on('click',function(){
        $('.mask').fadeIn();
        $('.set-box').fadeIn();
    });
    $('.set-close').on('click',function(){
        $('.mask').fadeOut();
        $('.set-box').fadeOut();
    });
    $('.set-bottom-right').on('click',function(){
        $('.mask').fadeOut();
        $('.set-box').fadeOut();
    });

    $('.tips').hover(function(){
        var index=$('.tips').index(this);
        $('.property-tishi').stop(false,true).eq(index).fadeIn();
    },function(){
        var i=$('.tips').index(this);
        $('.property-tishi').stop(false,true).eq(i).fadeOut();
    });
    $('.property-tip').hover(function(){
        $('.property-tip-show').stop(false,true).fadeIn();
    },function(){
        $('.property-tip-show').stop(false,true).fadeOut();
    })
});