var express = require('express');
var path = require('path');
var http = require('http');
var app = express();

// uncomment after placing your favicon in /public
app.use(express.static(__dirname + '/public'));//设置静态文件目录

app.use(express.static(__dirname + '/html'));

app.get('/', function(req, res){
    res.sendfile('html/index.html');
});

app.get('/html/example1', function(req, res){
    res.sendfile('html/example1/index.html');
});

app.get('/html/example2', function(req, res){
    res.sendfile('html/example2/index.html');
});

app.get('/html/example3', function(req, res){
    res.sendfile('html/example3/index.html');
});

app.get('/html/example4', function(req, res){
    res.sendfile('html/example4/index.html');
});

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.sendfile('html/404/404.html');
});

app.listen(8888,function () {
    console.log('listening on *:8888');
});


// var server = app.listen(8081, function () {
//
//     var host = server.address().address
//     var port = server.address().port
//
//     console.log("应用实例，访问地址为 http://%s:%s", host, port)
//
// })
