/*
*
* 返回码列表
*
* -1 存在不允许注册的字符
* 0  长度不够6位
* 1  弱密码
* 2  中级密码
* 3  高级密码
*
* 调用 $.password(passowrdValue)
* */

;(function ($) {
    var weekDict = [
        "123456", "123456789", "111111", "5201314",
        "12345678", "123123", "password", "1314520", "123321",
        "7758521", "1234567", "5211314", "666666", "520520",
        "woaini", "520131", "11111111", "888888", "hotmail.com",
        "112233", "123654", "654321", "1234567890", "a123456",
        "88888888", "163.com", "000000", "yahoo.com.cn", "sohu.com",
        "yahoo.cn", "111222tianya", "163.COM", "tom.com", "139.com",
        "wangyut2", "pp.com", "yahoo.com", "147258369", "123123123",
        "147258", "987654321", "100200", "zxcvbnm", "123456a",
        "521521", "7758258", "111222", "110110", "1314521",
        "11111111", "12345678", "a321654", "111111", "123123",
        "5201314", "00000000", "q123456", "123123123", "aaaaaa",
        "a123456789", "qq123456", "11112222", "woaini1314",
        "a123123", "a111111", "123321", "a5201314", "z123456",
        "liuchang", "a000000", "1314520", "asd123", "88888888",
        "1234567890", "7758521", "1234567", "woaini520",
        "147258369", "123456789a", "woaini123", "q1q1q1q1",
        "a12345678", "qwe123", "123456q", "121212", "asdasd",
        "999999", "1111111", "123698745", "137900", "159357",
        "iloveyou", "222222", "31415926", "123456", "111111",
        "123456789", "123123", "9958123", "woaini521", "5201314",
        "18n28n24a5", "abc123", "password", "123qwe", "123456789",
        "12345678", "11111111", "dearbook", "00000000", "123123123",
        "1234567890", "88888888", "111111111", "147258369",
        "987654321", "aaaaaaaa", "1111111111", "66666666",
        "a123456789", "11223344", "1qaz2wsx", "xiazhili",
        "789456123", "password", "87654321", "qqqqqqqq",
        "000000000", "qwertyuiop", "qq123456", "iloveyou",
        "31415926", "12344321", "0000000000", "asdfghjkl",
        "1q2w3e4r", "123456abc", "0123456789", "123654789",
        "12121212", "qazwsxedc", "abcd1234", "12341234",
        "110110110", "asdasdasd", "123456", "22222222", "123321123",
        "abc123456", "a12345678", "123456123", "a1234567",
        "1234qwer", "qwertyui", "123456789a", "qq.com", "369369",
        "163.com", "ohwe1zvq", "xiekai1121", "19860210", "1984130",
        "81251310", "502058", "162534", "690929", "601445",
        "1814325", "as1230", "zz123456", "280213676", "198773",
        "4861111", "328658", "19890608", "198428", "880126",
        "6516415", "111213", "195561", "780525", "6586123",
        "caonima99", "168816", "123654987", "qq776491",
        "hahabaobao", "198541", "540707", "leqing123", "5403693",
        "123456", "123456789", "111111", "5201314", "123123",
        "12345678", "1314520", "123321", "7758521", "1234567",
        "5211314", "520520", "woaini", "520131", "666666",
        "RAND#a#8", "hotmail.com", "112233", "123654", "888888",
        "654321", "1234567890", "a123456"
    ];
    var allowdChars = /[^!@#$%^&*0-9a-zA-Z]+$/;
    var parttens = [
        /[!@#$%^&*]+/,
        /[A-z]+/,
        /\d+/
    ];
    $.password = function (value) {
        if (allowdChars.test(value)) {
            return -1;
        }
        if (value.length < 6) {
            return 0;
        }
        if ($.inArray(value, weekDict) !== -1) {
            return 1;
        }
        var count = 0;
        $.each(parttens,function(index,partten){
            if (partten.test(value)) {
                count++;
            }
        });
        switch (count) {
            case 1:
                if (value.length <= 10) {
                    return 1;
                }
                return 2;
            case 2:
                if (value.length > 10) {
                    return 3;
                }
                return 2;
            case 3:
                return 3;
        }
    };
})(jQuery);