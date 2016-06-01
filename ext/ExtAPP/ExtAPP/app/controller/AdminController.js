Ext.define('app.controller.AdminController',{
	extend:'Ext.app.Controller',
	init:function(){
		var me = this;
		me.control({
			'AdminMain button[id=adminAdd]':{
				click:function(btn){
					Ext.create('app.view.AdminAddForm');
				}
			},
			'AdminAddForm button[id=cancle]':{
				click:function(btn){
					btn.up('AdminAddForm').destroy();
				}
			},
			'AdminAddForm button[id=reset]':{
				click:function(btn){
					btn.up('AdminAddForm').down('form').getForm().reset();
				}
			},
			'AdminAddForm button[id=save]':{
				click:function(btn){
					btn.up('AdminAddForm').down('form').submit({
						url:'./php/adminAdd.php',
						success:function(form,action){
							console.log(action);
						}
					});
				}
			},
			'AdminMain button[id=adminEdit]':{
				click:function(btn){
					var records = btn.up('AdminMain').getSelectionModel().getSelection();
					console.log(records);
				}
			},
			'AdminMain button[id=adminDelete]':{
				click:function(btn){
					Ext.MessageBox.confirm('确认','确定删除所选记录?',function(result){
						if(result == 'yes'){
							var records = btn.up('AdminMain').getSelectionModel().getSelection();
							var store = btn.up('AdminMain').getStore();
							store.remove(records);
							store.sync();
						}
					});
				}
			},
			'AdminMain':{
				selectionchange:function(selection,selected,eOpts){
					var adminEdit = Ext.ComponentQuery.query('button[id="adminEdit"]')[0];
					var adminDelete = Ext.ComponentQuery.query('button[id="adminDelete"]')[0];
					if(selected.length == 1){
						adminEdit.setDisabled(false);
					}else{
						adminEdit.setDisabled(true);
					}
					if(selected.length >= 1){
						adminDelete.setDisabled(false);
					}else{
						adminDelete.setDisabled(true);
					}
				}
			}
		});
	},
	views:[
		'app.view.AdminMain'
	],
	stores:[
		'app.store.AdminStore'
	]
});