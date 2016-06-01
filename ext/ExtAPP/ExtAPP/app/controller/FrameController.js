Ext.define('app.controller.FrameController',{
	extend:'Ext.app.Controller',
	init:function(){
		var me = this;
		Ext.create('Ext.ux.window.Notification',{
			title:'欢迎',
			html:'<center>欢迎您，薛磊！</center>',
			width:250,
			height:80
		}).show();
		me.control({
			'FrameMenu treepanel':{
				itemclick:function(tree,record,index,e,eOpts){
					if(!record.data.leaf){
						return;
					}
					var CenterView = tree.up('FrameMain').down('FrameCenter');
					var module = record.raw.module;
					module = module.slice(0,1).toUpperCase() + module.slice(1);
					var controller = module + 'Controller';
					var xtype = view = module + 'Main';
					var currentTab = CenterView.down(xtype);
					if(!currentTab){
						me.application.getController('app.controller.' + controller);
						currentTab = me.application.getView('app.view.' + view).create();
						CenterView.add(currentTab)
					}
					CenterView.setActiveTab(currentTab);
				}
			},
			'FrameMain container toolbar button[id=reFresh]':{
				click:function(){
					window.location.reload(false);
				}
			},
			'FrameMain container toolbar button[id=foldOnButton]':{
				click:function(btn){
					btn.up('FrameMain').down('FrameMenu').collapse();
					btn.setDisabled(true);
					btn.up('toolbar').down('button[id=foldOffButton]').setDisabled(false);
				}
			},
			'FrameMain container toolbar button[id=foldOffButton]':{
				click:function(btn){
					btn.up('FrameMain').down('FrameMenu').expand();
					btn.setDisabled(true);
					btn.up('toolbar').down('button[id=foldOnButton]').setDisabled(false);
				}
			},
			'FrameMenu':{
				beforecollapse:function(me){
					me.up('FrameMain').down('button[id=foldOffButton]').setDisabled(false);
					me.up('FrameMain').down('button[id=foldOnButton]').setDisabled(true);
				},
				beforeexpand:function(me){
					me.up('FrameMain').down('button[id=foldOffButton]').setDisabled(true);
					me.up('FrameMain').down('button[id=foldOnButton]').setDisabled(false);
				}
			}
		});
	},
	views:[
		'app.view.FrameMain',
		'app.view.FrameMenu',
		'app.view.FrameCenter',
		'app.view.HomeMain'
	],
	
	models:[
		'app.model.IndexModel'
	],
	stores:[
		'app.store.ThemeStore',
		'app.store.IndexStore'
	]
});