var submit_input = $('#submit-input'),
    submit_button = $('#submit-button'),
    submit_normal = $('#submit-normal'),
    type = $('#type');
function login(){
    var loginType = type.val();
    if( loginType == '直接跳转' ){
        location.href = 'home.html';
    }else if ( loginType == '发送请求、成功后跳转' ){
        $.ajax({
            url : 'user-info.json',
            type : 'get',
            dataType : 'json',
            success : function(res){
                console.log(res);
                location.href = 'home.html';
            },
            error : function(){
                alert('ajax error');
            }
        })
    }else{
        alert( '不想写PHP...' );
    }
}
//submit-input 发送ajax请求
submit_input.on('click',function(){
    login();
    return false;
});
//submit-button 发送ajax请求
submit_button.on('click',function(){
    login();
    return false;
});
//submit-normal 发送ajax请求
submit_normal.on('click',function(){
    login();
    return false;
});
