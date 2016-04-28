
<div class="myfinance">
    <div class="title">
        <div class="menu">
            <ul>
                <li class="selected" data-name = "shouyizhong">收益中</li>
                <li data-name="jingxingzhong" style="border-left:1px solid #2d99c8;border-right:1px solid #2d99c8">进行中</li>
                <li data-name="yiwancheng" style="width:34%">已完成</li>
            </ul>
        </div>
    </div>
    <div class="shouyizhong list">
        <div id="shouyizhongBox"></div>
        <a href="javascript:void(0)" id="shouyizhong_loadMore" style="display: block;text-align: center;height:32px;line-height:20px;">查看更多</a>
    </div>
    <div class="jingxingzhong list" style="display: none;">
        <div id="jingxingzhongBox"></div>
        <a href="javascript:void(0)" id="jingxingzhong_loadMore" style="display: block;text-align: center;height:32px;line-height:20px;">查看更多</a>
    </div>
    <div class="yiwancheng list" style="display: none;">
        <div id="yiwanchengBox"></div>
        <a href="javascript:void(0)" id="yiwancheng_loadMore" style="display: block;text-align: center;height:32px;line-height:20px;">查看更多</a>
    </div>
    <div id="loading" style="display:none;text-align: center;"><img src="/static/default/images/loading.gif"></div>
</div>


<script type="text/javascript">
    $(function () {
        var initColumn = $(".myfinance .menu li[class=selected]").data('name');
        var app = {
            currentColumn: '',
            shouyizhong: {
                request: 'income',
                currentPage: 1,
                template: '<a href="/deal/deal/detail?deal_id={{deal_id}}" ><div class="item">\n\
                                    <div class="title">\n\
                                        <span style="color:{{typeColor}};">【{{type}}】{{name}}</span>{{title}}\n\
                                    </div>\n\
                                    <div class="content">\n\
                                        <div class="content-left">\n\
                                            <div class="content-title">投资金额</div>\n\
                                            <div class="content-title content-value" >{{money}}<span style="font-size: 12px;">元</span></div>\n\
                                            <div class="content-title" >预期收益</div>\n\
                                            <div class="content-title content-value" >{{lixi}} <span style="font-size: 12px;">元</span></div>\n\
                                        </div>\n\
                                        <div class="content-right">\n\
                                            <div class="content-title" >年化收益率</div>\n\
                                            <div class="content-title content-value" >{{syl}} <span style="font-size: 12px;">%</span></div>\n\
                                            <div class="content-title" >项目到期日</div>\n\
                                            <div class="content-title content-value" >{{qixian}}</div>\n\
                                        </div>\n\
                                    </div>\n\
                                </div></a>'
            },
            jingxingzhong: {
                request: 'runing',
                currentPage: 1,
                template: '<a href="/deal/deal/detail?deal_id={{deal_id}}" ><div class="item">\n\
                                    <div class="title">\n\
                                        <img src="/static/default/images/{{typeImg}}" style="width:14px;height:14px" /><span style="color:{{typeColor}};">【{{type}}】</span>{{title}}\n\
                                    </div>\n\
                                    <div class="content">\n\
                                        <div class="content-left">\n\
                                            <div class="content-title" >投资金额</div>\n\
                                            <div class="content-title content-value" >{{money}}<span style="font-size: 12px;">元</span></div>\n\
                                            <div class="content-title" >项目状态</div>\n\
                                            <div class="content-title content-value " {{statusClass}}>{{status}}</div>\n\
                                        </div>\n\
                                        <div class="content-right">\n\
                                            <div class="content-title" >年化收益率</div>\n\
                                            <div class="content-title content-value" >{{syl}}<span style="font-size: 12px;">%</span><i style="font-size:12px;color:#FF6681;">+0.5% (10日)</i></div>\n\
                                            <div class="content-title" >项目到期日</div>\n\
                                            <div class="content-title content-value" >{{qixian}}</div>\n\
                                        </div>\n\
                                    </div>\n\
                                </div></a>'
            },
            yiwancheng: {
                request: 'complate',
                currentPage: 1,
                template: '<a href="/deal/deal/detail?deal_id={{deal_id}}" ><div class="item">\n\
                                    <div class="title">\n\
                                        <span style="color:{{typeColor}};">【{{type}}】</span>{{title}}\n\
                                    </div>\n\
                                    <div class="content">\n\
                                        <div class="content-left">\n\
                                            <div class="content-title" >投资金额</div>\n\
                                            <div class="content-title content-value" >{{money}}<span style="font-size: 12px;">元</span></div>\n\
                                            <div class="content-title" >实际收益</div>\n\
                                            <div class="content-title content-value" style="color: #fc9252">{{lixi}}<span style="font-size: 12px;">元</span></div>\n\
                                        </div>\n\
                                        <div class="content-right">\n\
                                            <div class="content-title" >年化收益率</div>\n\
                                            <div class="content-title content-value" >{{syl}}<span style="font-size: 12px;">%</span></div>\n\
                                            <div class="content-title" >项目到期日</div>\n\
                                            <div class="content-title content-value" >{{qixian}}</div>\n\
                                        </div>\n\
                                    </div>\n\
                                </div></a>'
            },
            parseTemplate: function (data) {
                var me = this;
                var str = '';
                for (var record in data) {
                    str += (function (record, template) {
                        return app.parse(template, record);
                    })(data[record], me[me.currentColumn].template);
                }
                return str;
            },
            init: function (column) {
                this.currentColumn = column;
            },
            changeColumn: function (column) {
                this.currentColumn = column;
            },
            parse: function (template, data) {
                return template.replace(/\{\{([\w\.]*)\}\}/g, function (str, key) {
                    var keys = key.split("."), v = data[keys.shift()];
                    for (var i = 0, l = keys.length; i < l; i++) {
                        v = v[keys[i]];
                    }
                    return (typeof v !== "undefined" && v !== null) ? v : "";
                });
            }
        };
        
        function appendData() {
            var moreButton = $(this);
            moreButton.hide();
            $('#loading').show();
            $.post('/user/invest/' + app[app.currentColumn].request, {currentPage: app[app.currentColumn].currentPage}, function (data) {
                $('#loading').hide();
                if (data.more == true) {
                    moreButton.show();
                }
                var html = app.parseTemplate(data.data);
                if(html==''){
                            html = '<img src="/static/default/images/list-null.png" style="display:block;margin:50px auto 10px;width:40%"><div style="text-align: center;">暂无记录</div>';
                }
                $('#' + app.currentColumn + 'Box').append(html);
                app[app.currentColumn].currentPage += 1;
            }, 'json');
        }
        
        app.init(initColumn);
        $('#shouyizhong_loadMore').click(appendData).trigger('click');
        $('#jingxingzhong_loadMore,#yiwancheng_loadMore').click(appendData);
        
        
        $(".myfinance .menu li").on("click", function () {
            var dataname = $(this).data("name");
            app.changeColumn(dataname);
            if(app[app.currentColumn].currentPage == 1){
                $('#'+dataname+'_loadMore').trigger('click');
            }
            $(".myfinance .menu li").removeClass("selected");
            $(this).addClass("selected");
            $(".myfinance .list").hide();
            $("." + dataname).show();
        });
    });
</script>
