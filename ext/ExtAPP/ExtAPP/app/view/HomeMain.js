Ext.define('app.view.HomeMain',{
	extend:'Ext.chart.Chart',
	alias:'widget.HomeMain',
	width:400,
	height:300,
	axes: [
        {
            title: 'Temperature',
            type: 'Numeric',
            position: 'left',
            fields: ['temperature'],
            minimum: 0,
            maximum: 100
        },
        {
            title: 'Time',
            type: 'Time',
            position: 'bottom',
            fields: ['date'],
            groupBy: 'hour',
            dateFormat: 'ga'
        }
    ],
    series: [
        {
            type: 'line',
            xField: 'date',
            yField: 'temperature'
        }
    ],
    theme:'Green',
    store:'app.store.IndexStore'
});