(function (root, factory) {
    var id = 'nav/page';
    root.widgets || (root.widgets = {});
    root.widgets[id] = factory(root.jQuery);
}(typeof window !== "undefined" ? window : this, function ($) {
    var nav_plus = {
        base : '/',
        userInfo : {},                                                                          // 用户信息
        delCartInfo: {},                                                                        // 删除的购物车商品信息 ps: 仅保存1条数据
        delCartDom: '',                                                                         // 删除的购物车商品dom元素
        cartNum : '',                                                                           // 购物车数量
        cartTime : 0,                                                                           // 购物车请求接口时间 ps: 限制其1s内最多请求一次
        tpl : {
            areaTpl : $('#area-tpl').html(),                                                    // 所在地模板
            nickNameTpl : $('#nick-name-tpl').html(),                                           // 用户名模板
            loginTpl : $('#login-tpl').html(),                                                  // 登录状态下登录弹窗模板
            noLoginTpl : $('#no-login-tpl').html(),                                             // 未登录状态下登录弹窗模板
            sellerCenterTpl : $('#seller-center-tpl').html(),                                   // 卖家中心模板
            cartListTpl : $('#cart-list-tpl').html(),                                           // 购物车列表模板
            cartNoneTpl : $('#cart-none-tpl').html(),                                           // 登录状态下购物车为空模板
            noLoginCartNoneTpl : $('#no-login-cart-none-tpl').html(),                           // 未登录状态下购物车为空模板
            qrCodeTpl : $('#qr-code-tpl').html(),                                               // 二维码模板
            navLoadTpl : $('#nav-load-tpl').html()                                              // load模板
        },
        dom : {
            navHeader : $('#navHeader'),
            areaText : $('#areaText'),
            areaWin : $('#areaWin'),
            msgNum : $('#msgNum'),
            nickName : $('#nickName'),
            loginWin : $('#loginWin'),
            sellerWin : $('#sellerWin'),
            cartListWin : $('#cartListWin'),
            cartLink : $('#cartLink'),
            cartNum : $('#cartNum'),
            unReadNum : $('#unReadNum'),
            codeWim : $('#codeWim')
        },
        area: '1000000000',
        areaInfo: {
            '1000000000':'北京',
            '2000000000':'上海',
            '3000000000':'天津',
            '4000000000':'重庆',
            '5000000000':'安徽',
            '6000000000':'福建',
            '7000000000':'甘肃',
            '8000000000':'广东',
            '9000000000':'广西',
            '10000000000':'贵州',
            '11000000000':'海南',
            '12000000000':'河北',
            '13000000000':'河南',
            '14000000000':'黑龙江',
            '15000000000':'湖北',
            '16000000000':'湖南',
            '17000000000':'吉林',
            '18000000000':'江苏',
            '19000000000':'江西',
            '20000000000':'辽宁',
            '21000000000':'内蒙古',
            '22000000000':'宁夏',
            '23000000000':'青海',
            '24000000000':'山东',
            '25000000000':'山西',
            '26000000000':'陕西',
            '27000000000':'四川',
            '28000000000':'西藏',
            '29000000000':'新疆',
            '30000000000':'云南',
            '31000000000':'浙江',
            '32000000000':'澳门',
            '33000000000':'台湾',
            '34000000000':'香港',
            '40000000000':'海外'
        },
        /**
         * 获取用户信息
         */
        getUserInfo: function(openLoginWin){
            var that = this;
            $.ajax({
                url: KFZ.site.user + 'Newpc/getUserInfo',
                type: 'GET',
                dataType: 'jsonp',
                cache: false,
                timeout: 3000,
                success: function(res){
                    if(res.status){
                        if(res.data.isLogin){
                          window.KFZ.userInfo = that.userInfo = res.data;
                          that.userInfoLoadedNotice(res.data, '用户信息加载完成 init');
                          that.statusInit();
                          that.areaInit();
                          that.imNoticeConnectNotice('进行消息连接');
                        }else{
                          that.areaInit();
                          openLoginWin && typeof window.loginWin == "function" && window.loginWin( KFZ.site.login,'login');
                        }
                    }
                },
                error: function(){
                  that.areaInit();
                  openLoginWin && typeof window.loginWin == "function" && window.loginWin( KFZ.site.login,'login');
                }
            });
        },
        /**
         * 初始化方法
         * 1. 设置 KFZ.userInfo
         * 2. 请求用户信息
         */
        init: function(){
            var that = this;
            window.KFZ.userInfo || (window.KFZ.userInfo = {});
            this.initNav();
            setTimeout(function () {
                that.loadRender();
                that.codeRender();
                that.getUserInfo();
                that.getCartList(true);
            });
        },
        /**
         * 初始化导航方法
         * 1. 模块通信管理器通知配置
         * 2. 根据用户信息展示不同状态信息
         * 3. 导航展开收起事件处理
         * 4. 初始化购物车
         * 5. 登录按钮点击统一处理
         */
        initNav: function(){
            this.contactManagerConf();
            this.statusInit();
            this.navFocusWatch();
            this.cartListInit();
            this.loginInit();
        },
        /**
         * 模块通信管理器通知配置
         * 1. 监听未读消息变化通知 -> 同步未读消息数量
         * 2. 监听购物车数量变化通知 -> 同步购物车数量
         */
        contactManagerConf: function(){
            var that = this;
            window.KFZ.tools.contactManager.on('msgNotice',function( unreadNum ){
                that.UnreadNumRender( unreadNum );
            },{
                from : '公共头部',
                description : '未读消息数量发生变化 -> 同步头部消息数量 contactManagerConf'
            });
            window.KFZ.tools.contactManager.on('areaNotice',function( area ){
                var area = area || window.KFZ.tools.cookies('reciever_area');
                if(area && area.length > 9){
                    area = area.slice(0, area.length - 9) + '000000000';
                    that.userInfo.area = area;
                    that.updateArea( area );
                }
            },{
                from : '公共头部',
                description : '监听用户所在地变化通知 -> 同步用户所在地信息 contactManagerConf'
            });
            window.KFZ.tools.contactManager.on('cartNotice',function(){
                that.getCartList();
            },{
                from : '公共头部',
                description : '监听购物车数量变化通知 -> 同步购物车数量 contactManagerConf'
            });
        },
        /**
         * 渲染loading
         */
        loadRender: function () {
            var loadTpl = doT.template(this.tpl.navLoadTpl);
            this.dom.cartListWin.find('.load-box').html(loadTpl({base: this.base}));
        },
        /**
         * 渲染二维码
         */
        codeRender: function () {
            var qrCodeTpl = doT.template(this.tpl.qrCodeTpl);
            this.dom.codeWim.html(qrCodeTpl({base: this.base}));
        },
        /**
         * 根据用户信息展示不同状态信息
         * 已登录
         *          -> 渲染 nickName -> 渲染 loginWin
         *          -> 是卖家 -> 渲染 sellerWin
         *          -> 不是卖家 -> 渲染 noSellerWin
         * 未登录
         *      渲染 noLoginWin -> 渲染 noSellerWin
         */
        statusInit: function(){
            // 是否登录
            if(this.userInfo.isLogin){
                this.nickNameRender();
                this.loginWinRender();
                this.sellerWinRender();

            }else{
                this.noLoginWinRender();
                this.sellerWinRender();
            }
        },
        /**
         * 渲染未读消息数
         * @param {String} type 显示状态
         * 'normal' -> 没有未读消息
         * != 'normal' -> 有未读消息
         */
        UnreadNumRender: function( unreadNum ){
          var type = unreadNum > 0?'':'normal';
          if(type == 'normal'){
              this.dom.msgNum.removeClass('msg-un-read').addClass('msg-normal');
              this.dom.unReadNum.html('');
          }else{
              this.dom.msgNum.removeClass('msg-normal').addClass('msg-un-read');
              if(unreadNum > 99){
                this.dom.unReadNum.html('99+');
              }else{
                this.dom.unReadNum.html(unreadNum);
              }
          }
        },
        /**
         * 获取购物车列表
         * 渲染购物车列表
         */
        getCartList: function(UserInfoFlag){
            var that = this;
            $.ajax({
                url: KFZ.site.cart + 'jsonp/listcart',
                type: 'GET',
                dataType: 'jsonp',
                data: {limit : 5},
                success: function(res){
                    if(res.status && res.result.data){
                      if(!UserInfoFlag && !that.userInfo.isLogin){
                          that.getUserInfo();
                      }
                      that.cartListRender(res.result);
                    }
                }
            })
        },
        /**
         * 渲染购物车列表
         * @param {Array} result 购物车列表
         * 购物车列表数 == 0
         *      已登录 -> 渲染 已登录购物车无商品模板
         *      未登录 -> 渲染 未登录购物车无商品模板
         * 购物车列表数 != 0
         *      渲染 购物车列表模板
         */
        cartListRender: function( result ){
            var that = this,
                cartListView = '',
                cartList = result.data,
                cartNum = result.page.recordCount;
            this.cartNum = cartNum*1;
            if(result.data.length == 0){
                this.dom.cartNum.html('');
                that.updateCartNumNotice(0);
                if(this.userInfo.isLogin){
                    cartListView = (doT.template(this.tpl.cartNoneTpl))();
                }else{
                    cartListView = (doT.template(this.tpl.noLoginCartNoneTpl))();
                }
            }else{
                this.dom.cartNum.html(result.page.recordCount);
                that.updateCartNumNotice(result.page.recordCount);
                cartListView = (doT.template(this.tpl.cartListTpl))({cartList: cartList, cartNum: cartNum, base: this.base});
            }
            this.dom.cartListWin.html(cartListView);
            this.dom.cartListWin.find('img').on( 'error', function(){
                window.KFZ.tools.onErrorReplace( that.base + 'static/kfz-navHeader/error.jpg', this, $(this));
            });
        },
        /**
         * 渲染nickName
         */
        nickNameRender: function(){
            var nickNameTpl = doT.template(this.tpl.nickNameTpl);
            this.dom.nickName.html(nickNameTpl({nickName: this.userInfo.nickname}));
        },
        /**
         * 获取当前页面url 用来登录后跳转
         */
        currentUrl: function(){
            var hash = window.location.hash.substr(1).replace(/\?.*/g, ''), href = window.location.href.replace(/#[\w-\/]*/gi, '').replace(/\?returnUrl=.*$/, '');
            href = '?returnUrl=' + encodeURIComponent(href + (hash ? (/\?/.test(href) ? '&' : '?') + 'hash=' + hash : ''));
            return href;
        },
        /**
         * 渲染loginWin
         */
        loginWinRender: function(){
            var that = this,
                loginTpl = doT.template(this.tpl.loginTpl);
            this.dom.loginWin.html(loginTpl());
            window.KFZ.userInfo.photo && window.KFZ.tools.loadImage(window.KFZ.userInfo.photo,function( img ){
                that.dom.loginWin.find('.pic-img').attr('src', window.KFZ.userInfo.photo).removeClass('hide');
                that.dom.loginWin.find('.pic-ico').hide();
            });
            this.dom.loginWin.find('.logout-btn').click(function(){
                location.href = window.KFZ.site.login + 'logout/' + that.currentUrl();
            });
        },
        /**
         * 渲染sellerWin
         */
        sellerWinRender: function(){
            var sellerCenterTpl = doT.template(this.tpl.sellerCenterTpl);
            this.dom.sellerWin.html(sellerCenterTpl({userType:  this.userInfo.userType || []}));
        },
        /**
         * 渲染loginWin
         */
        noLoginWinRender: function(){
            var that = this,
                noLoginTpl = doT.template(this.tpl.noLoginTpl);
            this.dom.loginWin.html(noLoginTpl());
            this.dom.loginWin.find('.icon-btn').click(function(){
                var $tag = $(this),
                    type = $tag.attr('type'),
                    typeUrl = '';
                switch ( type ){
                    case 'weixin' :
                        typeUrl = 'Pc/Openweixin/loginOAuth2';
                        break;
                    case 'qq' :
                        typeUrl = '/Pc/Openqq/loginOAuth2';
                        break;
                    case 'weibo' :
                        typeUrl = 'Pc/Openweibo/loginOAuth2';
                        break;
                }
                location.href = window.KFZ.site.login + typeUrl + that.currentUrl();
            });
        },
        /**
         * 初始化地址信息
         * 用户信息中有地址信息 -> 设置地址cookies -> 渲染地址信息
         * 用户信息中没有地址信息 -> 获取地址cookies
         *      cookies 中存在地址信息 -> 请求会员设置cookies接口 -> 渲染地址信息
         *      cookies 中不存在地址信息 -> 不进行操作
         * 渲染地址选择框
         * 监听地址选择事件
         *      交互 -> 同步 this.userInfo 地址信息 -> 触发模块通信管理器'updateArea' -> 请求会员系统设置用户地址信息
         */
        areaInit: function(){
            var that = this,
                area = this.userInfo.area || window.KFZ.tools.cookies('reciever_area');
            if(!area){
                area = '1000000000';
            }
            var topArea = area.slice(0, area.length - 9) + '000000000';
            if(!this.areaInfo[topArea]){
                topArea = area = '1000000000';
            }
            this.setArea({area : topArea});
            this.userInfo.area = topArea;
            this.dom.areaText.html('送至 ' + this.areaInfo[topArea]);
            this.areaRender();
            this.dom.areaWin.find('.text').click(function(e){
                e.stopPropagation()
                var $tag = $(this),
                    area = $tag.attr('code');
                if(that.updateArea( area, $tag )){
                    that.setArea({area : area});
                }
            });
        },
        /**
         * 渲染areaWin
         */
        areaRender: function(){
            var areaTpl = doT.template(this.tpl.areaTpl);
            this.dom.areaWin.html(areaTpl({areaList: this.areaInfo,active: this.userInfo.area || ''}));
        },
        /**
         * 更新 areaWin
         */
        updateArea: function( area, activeDom ){
            var area = area,
                areaName = this.areaInfo[area],
                $tag = activeDom || this.dom.areaWin.find('.text[code=' + area + ']'),
                flag = $tag.parent().hasClass('active');
            if(flag){
                return false;
            }
            $tag.parent().addClass('active').siblings('.active').removeClass('active').parents('.item-info').removeClass('info-focus-active');
            this.dom.areaText.html('送至 ' + areaName);
            this.userInfo.area = area;
            this.userInfo.areaName = areaName;
            return true;
        },
        /**
         * 设置用户地址信息cookies
         * 请求会员系统设置用户地址信息
         * @param {Object} param 设置用户地址信息请求参数
         */
        setArea: function(param){
            var that = this;
            this.area = window.KFZ.tools.cookies('reciever_area');
            $.ajax({
                url: KFZ.site.user + 'Newpc/setUserArea',
                type: 'GET',
                dataType: 'jsonp',
                data: param,
                success: function(res){
                    if(res.status){
                        that.updateAreaNotice( param.area, '选择用户所在地 areaInit' );
                    }
                }
            })
        },
        /**
         * 导航展开收起事件处理
         * 监听导航各选项鼠标移入移除事件
         * 购物车列表获取做限流处理
         */
        isPc: function(){
            if(/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)) {
                return "WEB";
            } else {
                return "PC";
            }
        },
        navFocusWatch: function(){
            var that = this;
            if (this.isPc()==='PC') {
                this.dom.navHeader.find('.item-info').mouseenter(function () {
                    var $tag = $(this),
                        name = $tag.attr('name');
                    $tag.addClass("info-focus-active");
                }).mouseleave(function () {
                    $(this).removeClass("info-focus-active");
                    that.dom.cartListWin.find('.revoke-btn').hide();
                    that.delCartDom && that.delCartDom.remove();
                });
            } else {
                this.dom.navHeader.find('.item-info').mouseenter(function () {
                    var $tag = $(this),
                        name = $tag.attr('name');
                    $tag.addClass("info-focus-active");
                }).mouseleave(function () {
                    $(this).removeClass("info-focus-active");
                    that.dom.cartListWin.find('.revoke-btn').hide();
                    that.delCartDom && that.delCartDom.remove();
                });
                this.dom.navHeader.find('.dest').click(function () {
                    // alert('chufa')
                    var $tag = $(this),
                        name = $tag.attr('name');
                    $tag.addClass("info-focus-active");
                    // alert($(this).className)
                })
            }
            // this.dom.navHeader.find('.item-info').mouseenter(function () {
            //     var $tag = $(this),
            //         name = $tag.attr('name');
            //     $tag.addClass("info-focus-active");
            // }).mouseleave(function () {
            //     $(this).removeClass("info-focus-active");
            //     that.dom.cartListWin.find('.revoke-btn').hide();
            //     that.delCartDom && that.delCartDom.remove();
            // });
            this.dom.cartLink.mouseenter(function () {
                var curTime = new Date().getTime();
                if(curTime - that.cartTime > 1000){
                    that.cartTime = curTime;
                    that.getCartList();
                }
            });
        },
        /**
         * 初始化购物车
         * 监听 '删除' '撤销' '登录' 事件
         * 删除事件 -> 请求删除购物车
         * 撤销事件 -> 将最近一次删除的商品请求加入购物车
         * 登录事件 -> 调用登录widget方法
         */
        cartListInit: function(){
            var that = this;
            this.dom.cartListWin.delegate('.del-btn', 'click', function(){
                var $tag = $(this),
                    cartDom = $tag.parents('.item'),
                    shopId = cartDom.attr('shopid'),
                    itemId = cartDom.attr('itemid'),
                    cartId = cartDom.attr('cartid'),
                    delParam = {
                        carts : [{cartId: cartId,itemId: itemId}]
                    };
                that.delCartInfo = {
                    shopId : shopId,
                    itemId : itemId,
                    num : 1
                };
                that.delCartItem(delParam, cartDom);
            }).delegate('.revoke-btn', 'click', function(){
                that.addCartItem();
                $(this).hide();
            }).delegate('.login-btn', 'click', function(){
                that.getUserInfo(true);
            });
        },
        /**
         * 删除购物车操作
         * 请求删除接口 -> 隐藏该商品 -> 同步页面购物车数量 -> 显示撤销按钮 -> 调用删除回调函数
         * @param {Object} delParam 删除购物车请求参数
         * @param {Object} cartDom 删除的商品dom元素
         */
        delCartItem: function(delParam, cartDom){
            var that = this;
            $.ajax({
                url: KFZ.site.cart + 'jsonp/delCartItem',
                type: 'GET',
                dataType: 'jsonp',
                data: delParam,
                success: function(res){
                    if(res.status){
                        cartDom.hide();
                        that.cartNum -= 1;
                        that.dom.cartNum.html(that.cartNum);
                        that.updateCartNumNotice(that.cartNum);
                        that.delCartDom = cartDom;
                        that.dom.cartListWin.find('.revoke-btn').show();
                        that.delCartNotice( delParam, '删除购物车操作成功后 delCartItem' );
                    }else{
                        console.log('删除失败，请重试！');
                    }
                }
            })
        },
        /**
         * 加入购物车操作
         * 请求删除接口 -> 移动删除商品位置到第一位 -> 显示该商品 -> 同步页面购物车数量 -> 隐藏撤销按钮 -> 调用撤销回调函数
         */
        addCartItem: function(){
            var that = this;
            $.ajax({
                url: KFZ.site.cart + 'jsonp/add/',
                type: 'GET',
                dataType: 'jsonp',
                data: that.delCartInfo,
                success: function(res){
                    if(res.status){
                        that.dom.cartListWin.find('.item-list').prepend(that.delCartDom);
                        that.delCartDom.show();
                        that.cartNum += 1;
                        that.dom.cartNum.html(that.cartNum);
                        that.updateCartNumNotice(that.cartNum);
                        that.revokeCartNotice( '加入购物车成功后 addCartItem' );
                    }else{
                        console.log('撤销失败，请重新添加该商品！');
                    }
                }
            })
        },
        /**
         * 登录按钮点击统一处理
         */
        loginInit: function(){
            var that = this;
            this.dom.loginWin.delegate('.login-btn', 'click', function(){
                that.getUserInfo(true);
            }).delegate('.register-btn', 'click', function(){
                typeof window.loginWin == "function" && window.loginWin(KFZ.site.login,'register');
            });
        },
        /**
         * 通知模块通信管理器'delCart'
         */
        delCartNotice: function( param, description ){
            window.KFZ.tools.contactManager.run('delCart',{
                param : param,
                from : '公共头部',
                description : description || '未知描述'
            });
        },
        /**
         * 通知模块通信管理器'revokeCart'
         */
        revokeCartNotice: function( description ){
            window.KFZ.tools.contactManager.run('revokeCart',{
                from : '公共头部',
                description : description || '未知描述'
            });
        },
        /**
         * 通知模块通信管理器'cartNotice'
         */
        updateCartNumNotice: function( cartNum, description ){
            window.KFZ.tools.contactManager.run('cartNumNotice',{
                param : cartNum,
                from : '公共头部',
                description : description || '未知描述'
            });
        },
        /**
         * 通知模块通信管理器'updateArea'
         */
        updateAreaNotice: function( area, description ){
            if(!this.areaFlag || this.area != window.KFZ.tools.cookies('reciever_area')){
              this.areaFlag = true;
              window.KFZ.tools.contactManager.run('updateArea',{
                  param : area,
                  from : '公共头部',
                  description : description || '未知描述'
              });
            }
        },
        /**
         * 通知模块通信管理器'userInfoLoaded'
         */
        userInfoLoadedNotice: function( userInfo, description ){
            window.KFZ.tools.contactManager.run('userInfoLoaded',{
                param : userInfo,
                from : '公共头部',
                description : description || '未知描述'
            });
        },
        /**
         * 通知模块通信管理器'imNoticeConnect'
         */
        imNoticeConnectNotice: function( description ){
            window.KFZ.tools.contactManager.run('imNoticeConnect',{
                from : '公共头部',
                description : description || '未知描述'
            });
        }
    };
    nav_plus.init();
    return nav_plus;
}));
