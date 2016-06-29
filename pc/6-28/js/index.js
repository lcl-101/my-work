$(function(){
    //复制
    if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0" ){
        $('#copy-buttons').on('click',function(){
            alert('请手动复制QQ群号');
        })
    }else {
        try {
            var btn = document.getElementById('copy-buttons');
            var clipboard = new Clipboard(btn);
            clipboard.on('success', function(e) {
                alert('内容已复制到剪贴板');
            });

            clipboard.on('error', function(e) {
                alert('请重新复制');
            });
        }catch(error){

        }
    }
    var imEle = document.getElementById("enan");
    imEle.onclick = function () {
        window.open("http://wangcaigu.udesk.cn/im_client?cur_url=" + escape(location.href) + "&pre_url=" + escape(document.referrer), "udesk_im", "width=780,height=560,top=200,left=350,resizable=yes");
    };
});