# 孔网公共头部

> 作者：陈辉 <chenhui@kongfz.com>

> ps: 更新公共底部请在此 *changeLog* 注明更新内容

### changeLog
    1. 创建公共头部项目 2017-7-24
    2. 更新配置信息 2017-9-02
    3. 修改js环境兼容问题
    4. 修改.img-box line-height样式问题
    5. 修改 头像 问题
    6. 更新ICON
    7. 更新样式
    8. 增加 userInfoLoadedNotice 方法 通知页面用户信息加载完成

## 使用方法

ps:依赖iconfront图标项目navHeader

> bower.json 进行如下配置

```
'devDependencies' : {
    "kfz-navHeader": "git@gitlab.kongfz.com:widget/kfz-navHeader.git#1.0.0"   // #1.0.0 版本号
}
```

> 页面引用

```

// 1、 html/phtml:

// 孔网各首页使用
<?= \kongfz\Widgets::singleton()->widget('nav', 'index') ?>

// 孔网其它页面使用
<?= \kongfz\Widgets::singleton()->widget('nav', 'page') ?>

// 2、 json 配置

// 孔网各首页使用
"widgetDeps": ["nav/index"]

// 孔网其它页面使用
"widgetDeps": ["nav/page"]

// 转发 配置 默认为 '/'

nav_plus.base = '/searchfront/';

```


