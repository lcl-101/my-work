!function (root, factory) {
    root.widgets || (root.widgets = {});
    if (typeof module === 'object' && module.exports){
        module.exports = factory(root.jQuery);
    }else{
        factory(root.jQuery);
    }
}(typeof window !== 'undefined' ? window : this, function ($) {
    var nav_menu = {
        init: function(){
            var $categoryBox = $('.category-box');
            $categoryBox.delegate('.seller_title', 'mouseenter', function(){
                $categoryBox.find('.seller_title').addClass('active').find('.icon_arrow').removeClass('down_arrow').addClass('up_arrow');
                $categoryBox.find('.category-list').show();
            }).delegate('.seller_title', 'mouseleave', function(){
                $categoryBox.find('.seller_title').removeClass('active').find('.icon_arrow').removeClass('up_arrow').addClass('down_arrow');
                $categoryBox.find('.category-list').hide();
            }).delegate('.category-list', 'mouseenter', function(){
                $categoryBox.find('.category-list').show();
                $categoryBox.find('.seller_title').addClass('active').find('.icon_arrow').removeClass('down_arrow').addClass('up_arrow');
            }).delegate('.category-list', 'mouseleave', function(){
                $categoryBox.find('.category-list').hide();
                $categoryBox.find('.seller_title').removeClass('active').find('.icon_arrow').removeClass('up_arrow').addClass('down_arrow');
            });
            var that = this;
            window.KFZ.tools.contactManager.on('userInfoLoaded',function( userInfo ){
               that.renderMenu();
            },{
                from : '卖家中心菜单',
                description : '用户信息加载完成 -> 开始渲染 init'
            });
            
        },
        renderMenu:function(){
            if(KFZ.userInfo && KFZ.userInfo.userType){
                //设置买家身份标识对象
                var userType = KFZ.userInfo.userType;
                var sellerType = {shopkeeper:false,auctioneer:false,bookstaller:false};
                var shopId = ''
                if(window.localStorage && localStorage.getItem('__shopId')){
                    shopId = localStorage.getItem('__shopId');
                }
                if(userType.indexOf('shopkeeper') > -1){
                    sellerType.shopkeeper= true; //摊主也是店主归纳为店主
                }
                if(userType.indexOf('auctioneer') > -1){
                    sellerType.auctioneer= true;
                }
                if(userType.indexOf('bookstaller') > -1 && userType.indexOf('shopkeeper') == -1){
                    sellerType.bookstaller= true;//摊主不是是店主归纳为摊主
                }
            }
            var menuTpl = doT.template($('#menuTpl').html());
            $('#menuBox').html(menuTpl({kfz:KFZ,sellerType:sellerType,shopId:shopId}));
        }
    }
    nav_menu.init();
    return nav_menu;
});