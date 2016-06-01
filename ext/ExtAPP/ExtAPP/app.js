Ext.application({
    name: 'app',
    appFolder:'/my-work/ext/ExtApp/ExtApp/app',
    paths:{
        
    },
    init:function(){
        ColumnFactory = Ext.create('ColumnFactory',{
            url:'/Admin/Ext/getColumns'
        });
        ModelFactory = Ext.create('ModelFactory',{
            url:'/Admin/Ext/getFields'
        });
    },
    launch: function() {
        Ext.create('Ext.container.Viewport',{
            layout:'fit',
            border:false,
            items:[
                {
                    xtype:'FrameMain'
                }
            ]
        });
    },
    controllers:[
    	'app.controller.FrameController',
        //'app.controller.LoginController'
    ]
});