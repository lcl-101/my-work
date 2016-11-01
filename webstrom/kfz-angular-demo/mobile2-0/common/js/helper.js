/**
 * helper
 * 目的：开发可能会需要自定义一些辅助函数
 * 作用：
 */
var helper = angular.module('helper',[]);
helper.factory('helper', function(){
    return {
        strLen: function (str) {//获得字符串实际长度，中文2，英文1
            if (!str) return 0;
            var realLength = 0;
            var len = str.length;
            var charCode = -1;
            for (var i = 0; i < len; i++) {
                charCode = str.charCodeAt(i);
                if (charCode >= 0 && charCode <= 128) {
                    realLength += 1;

                }
                else {
                    realLength += 2;
                }
            }
            return realLength;
        },
        strHide: function (str, replace, start, end) {//
            if (!str) return str;
            var replaceStr = '';
            var length = end-start;
            for(var i = 1; i <= length; i++) {
                replaceStr += replace;
            }

            var hideStr = str.substring(start, end);
            return str.replace(hideStr, replaceStr);
        },
        checkPhone: function (phone) {//检查手机号和电话号码是否合法
            if (!phone) return false;
            var pattern=/(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
            if(pattern.test(phone)) {
                return true;
            }else{
                return false;
            }
        },
        checkEmail: function (email) {//检查email是否合法
            if (!email) return false;
            var emailreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            if (!emailreg.test(email)) {
                return false;
            }
            return true;
        },
        checkPostal: function(postal) {//检查邮政编码
            if (!postal) return false;
            var pattern =/^[0-9]{6}$/;
            if(!pattern.exec(postal))
            {
                return false;
            }
            return true;
        },
        checkQQ: function(qq) {//检查邮政编码
            if (!qq) return false;
            var reg = /^[1-9]\d{4,8}$/;
            if (!reg.test(qq)) {
                return false;
            }
            return true;
        },
        checkId: function(ID) {
            if(typeof ID !== 'string') return false;//return '非法字符串';
            var city = {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};
            var birthday = ID.substr(6, 4) + '/' + Number(ID.substr(10, 2)) + '/' + Number(ID.substr(12, 2));
            var d = new Date(birthday);
            var newBirthday = d.getFullYear() + '/' + Number(d.getMonth() + 1) + '/' + Number(d.getDate());
            var currentTime = new Date().getTime();
            var time = d.getTime();
            var arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            var arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
            var sum = 0, i, residue;

            if(!/^\d{17}(\d|x)$/i.test(ID)) return false; //'非法身份证';
            if(city[ID.substr(0,2)] === undefined) return false; //"非法地区";
            if(time >= currentTime || birthday !== newBirthday) return false;//'非法生日';
            for(i=0; i<17; i++) {
                sum += ID.substr(i, 1) * arrInt[i];
            }
            residue = arrCh[sum % 11];
            if (residue !== ID.substr(17, 1)) return false;//'非法身份证哦';

            return true;//city[ID.substr(0,2)]+","+birthday+","+(ID.substr(16,1)%2?" 男":"女")
        },
        passSecure: function(str) {//密码安全度
            var modes = 0;
            if(!str) return 1;
            if(str.length < 1) return 1;

            if (/\d/.test(str)) modes++; //数字
            if (/[a-z]/.test(str)) modes++; //小写
            if (/[A-Z]/.test(str)) modes++; //大写
            if (/\W/.test(str)) modes++; //特殊字符

            if(str.length < 6 || modes == 1) {
                return 2;
            }
            else if(modes == 2) {
                return 3;
            }
            else {
                return 4;
            }
        },
        calendar: function(sYear, eYear, long) {//日历
            var sYear = sYear?sYear:false;
            var eYear = eYear?eYear:false;
            var long = long?long:false;
            var year = [];
            var month = [];
            var day = [];
            var dayModel = [];
            var date = new Date();
            if(eYear === false) {
                eYear = date.getFullYear();
            }
            if(sYear === false) {
                sYear = eYear - 100;
            }
            if(long !== false) {
                year.push({name: '长期', value: 9999});
            }

            //year
            for (var i = eYear; i >= sYear; i--) {
                year.push({name: i + '年', value: i});
            }

            //month
            for(var j = 1; j <= 12; j++) {
                month.push({name: j + '月', value: j});
            }

            //day
            for(var k = 1; k <= 31; k++) {
                day.push({name: k + '日', value: k});
                if(k == 28) {
                    dayModel[0] = day.concat();
                }
                if(k == 29) {
                    dayModel[1] = day.concat();
                }
                if(k == 30) {
                    dayModel[2] = day.concat();
                }
                if(k == 31) {
                    dayModel[3] = day.concat();
                }
            }


            return {year: year, month: month, day: dayModel};
        },
        calendarDay: function(year, month, dayModel) {//根据年月获取日模型
            //console.log(year, month, dayModel);
            var day = null;
            if(month == 2) {
                day = !(year % (year % 100 ? 4 : 400)) ? dayModel[1] : dayModel[0];
            }
            else if(month == 4 || month == 6 || month == 9 || month == 11) {
                day = dayModel[2];
            }
            else {
                day = dayModel[3];
            }

            return day;
        },
        dateSplice: function(str) {//切割日期字符串2016-01-01 00:00:00 => ['2016', '01', '01', '00', '00', '00']
            var arr = new Array();
            var date = new Date();
            arr.push(date.getFullYear().toString());
            arr.push('01');
            arr.push('01');
            arr.push('00');
            arr.push('00');
            arr.push('00');

            if(!str) return arr;

            arr[0] = str.slice(0, 4);
            arr[1] = str.slice(5, 7);
            arr[2] = str.slice(8, 10);

            return arr;
        },
    }
});