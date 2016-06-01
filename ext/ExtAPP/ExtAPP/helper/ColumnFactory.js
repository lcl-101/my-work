Ext.define('Ext.ux.ColumnFactory',{
	requires:['Ext.Ajax','Ext.util.MixedCollection'],
	alternateClassName:['ColumnFactory'],
	url:'',
	timeout:3000,
	params:{},
	method:'GET',
	columnsCollection:new Ext.util.MixedCollection(),
	constructor:function(config){
        Ext.apply(this,config);
    },
	getColumns:function(modelName){
		var columns;
		var me = this;
		columns = me.columnsCollection.getByKey(modelName);
		if(columns === undefined){
			var params = {
				modelName:modelName
			};
			Ext.applyIf(params,me.params);
			Ext.Ajax.request({
				async:false,
				url:me.url,
				method:me.method,
				timeout:me.timeout,
				params:params,
				success: function(response,opts){
			        var result = Ext.JSON.decode(response.responseText);
					if(result.success){
						me.columnsCollection.add(modelName,result.data);
						columns = result.data;
					}else{
						console.log('request failure ! '+result.message);
					}
			    },
			    failure: function(response,opts) {
			        console.log('server-side failure with status code ' + response.status);
			    }
			});
		}
		return columns;
	}
});