// 设置正确的用户名和密码
var correctUsername = "KIDO";
var correctPassword = "ShiWuXueTang";


$("button").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();
    
    //在下面加入代码
if(username === correctUsername && password === correctPassword){
    alert("登录成功")
}else if(username === "" || password === ""){
    alert("请输入")
} else {
    if(username !== correctUsername){
        alert("用户名错误")
    }else if (password !== correctPassword){
        alert("密码错误")
    }
}



});

$(".1").click(function(){
    alert("提示：KIDO")
});
$(".1").mouseenter(function(){
    $(".1").css("color","blue")
});
$(".1").mouseleave(function(){
    $(".1").css("color","black")
});


$(".2").click(function(){
    alert("提示：ShiWuXueTang")
});
$(".2").mouseenter(function(){
    $(".2").css("color","blue")
});
$(".2").mouseleave(function(){
    $(".2").css("color","black")
});