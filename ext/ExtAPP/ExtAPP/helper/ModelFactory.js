Ext.define('Ext.ux.ModelFactory',{
	requires:['Ext.Ajax','Ext.util.MixedCollection'],
	alternateClassName:['ModelFactory'],
	url:'',
	timeout:3000,
	params:{},
	method:'GET',
	modelCollection:new Ext.util.MixedCollection(),
	constructor:function(config){
        Ext.apply(this,config);
    },
	getModel:function(modelName){
		var model;
		var me = this;
		model = me.modelCollection.getByKey(modelName);
		if(model === undefined){
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
						me.modelCollection.add(modelName,result.data);
						Ext.define(modelName,{
							extend:'Ext.data.Model',
							fields:result.data
						});
					}else{
						console.log('request failure ! '+result.message);
					}
			    },
			    failure: function(response,opts) {
			        console.log('server-side failure with status code ' + response.status);
			    }
			});
		}
		return modelName;
	}
});