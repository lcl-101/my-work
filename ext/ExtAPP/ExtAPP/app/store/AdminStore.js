Ext.define('app.store.AdminStore',{
	extend:'Ext.data.Store',
	model:ModelFactory.getModel('app.admin.model.AdminModel'),
    proxy: {
        type: 'ajax',
        api:{
            read:'/Admin/Admin/select',
            create:'',
            update:'',
            destroy:'/Admin/Admin/delete'
        },
        reader: {
            type:'json',
            root:'data'
        }
    },
    autoLoad:true
});