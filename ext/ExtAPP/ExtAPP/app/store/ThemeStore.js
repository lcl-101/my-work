Ext.define('app.store.ThemeStore',{
	extend:'Ext.data.Store',
	fields:['css', 'theme'],
    data:[
        {"css":"AL", "theme":"蔚蓝天空"},
        {"css":"AK", "theme":"灰色极客"}
    ]
});