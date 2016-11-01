/*
 * filter过滤文件
 * 目的：开发可能会需要自定义一些过滤规范
 * 作用：对字符进行匹配、提取、增加、删除、修改等操作
 */
var filters = angular.module('filters', []);

//过滤后数据长度
filters.filter('size', function() {
  return function (lists) {
    if (!lists)
      return 0;

    return lists.length || 0;
  }
});