    // 现在穿的衣服👔
let current;
    // 上一次穿的衣服👔
let lastTime;
    // 第几次穿衣服👔
let frequency = 0;




$(document).ready(function() {  //等所有东西都加载完
    $(".outfit-selection").click(function(){    //用户单击衣服
        //隐藏上一件👔

        frequency++;    //每换一次衣服就加一，记录穿衣服的次数
        if (frequency != 1) {   //因为用户第一次穿衣服不用把上一次的衣服隐藏掉，因为第一次的上一次还没换衣服
            $("#o"+lastTime).hide();    //隐藏上一次的衣服
        }
        
        // 显示现在要穿的衣服👔
        current = $(this).attr("id").match(/\d+/g); //取出现在点击的衣服👔的id(不知道为什么必须要加/\d+/g才能取出数字)
        $("#o"+current).show(); //显示现在要穿的衣服👔
        

        lastTime = current; //所有事情做完就记录上一次穿的衣服的号码
    });


    $("#strip-button").click(function(){    //用户单击脱光按钮
        //隐藏现在穿的衣服👔
        $("#o"+current).hide();
    });
});