Ext.define('app.view.FrameMenu',{
	extend:'Ext.panel.Panel',
	alias:'widget.FrameMenu',
	width:200,
	minWidth:150,
	maxWidth:250,
	split:true,
	collapsible:true,
	title:'菜单导航',
	layout:'accordion',
	defaults:{
		xtype:'treepanel',
		rootVisible:false
	},
	initComponent:function(){
		this.callParent(arguments);
		var self = this;
		Ext.Ajax.request({
		    url: '/Admin/Node/menu',
		    success: function(response){
		        var text = response.responseText;
		        items = Ext.JSON.decode(text);
		        self.add(items);
		    }
		});
	}
});