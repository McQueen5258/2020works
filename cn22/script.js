

// 1. 英语

$(".englishButton").click(function(){
    let englishInput = $(".english").val();
        
    //如果答案正确，则显示此文本
    if(englishInput === "Monday" || englishInput === "monday"){
          $(".englishMessage").text("正确!");
          $(".englishMessage").css("background-color","green")
  
    }else{
     //如果答案不正确，则显示此文本
    
    $(".englishMessage").text("错误！请再试一次");   
    $(".englishMessage").css("background-color","red") 
    }
    
    
    
});


// 2. 地理

$(".ssButton").click(function(){
    let ssInput = $(".socialStudies").val();
    if(ssInput === "北京" || ssInput === "Beijing" || ssInput === "Beijing" || ssInput === "beijing" || ssInput === "直辖市" || ssInput === "京"){
        $(".ssMessage").text("正确!");
        $(".ssMessage").css("background-color","green")
    }else{
        $(".ssMessage").text("错误！请再试一次");
        $(".ssMessage").css("background-color","red")
    }
    
});


// 3. 数学

$(".mathButton").click(function(){
    let mathInput = $(".math").val();
    
    //下面，我们使用parseInt（）函数将输入值（字符串）转换为数字
    
    mathInput = parseInt(mathInput);
    if( mathInput === 30){
        $(".mathMessage").text("正确!");
        $(".mathMessage").css("background-color","green")

  }else{
  $(".mathMessage").text("错误！请再试一次");  
  $(".mathMessage").css("background-color","red")  
  }

});


// 4. 科学

$(".scienceButton").click(function(){
    let scienceInput = $(".science").val();
    if( scienceInput === "是固体" || scienceInput === "固体"|| scienceInput === "冰是固体"){
        $(".scienceMessage").text("正确!");
        $(".scienceMessage").css("background-color","green")

  }else{
  $(".scienceMessage").text("错误！请再试一次");
  $(".scienceMessage").css("background-color","red")
  }

});

