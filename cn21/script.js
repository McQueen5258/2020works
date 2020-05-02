let selectedFilter;

$(".applyFilter").click(function() {
    let filter = $("input").val();
    
    // 在以下代码旁边编写if语句。
    
    // 注意，条件是什么？如果满足条件应该执行什么？
    
    // 让我们一起做第一个例子。如果用户在输入中输入Harlem，则下面是我们要执行的代码块。请打开注释的jQuery代码。
        if (filter === "Harlem") {
             $("img").css("filter", "contrast(115%) brightness(120%)");
        } else if(filter === "Bushwick"){
            // Bushwick
    
        $("img").css("filter", "contrast(50%) brightness(180%)");
        }else if(filter === "SOMA"){
            // SOMA
                $("img").css("filter", "grayscale(50%) hue-rotate(10deg)");
        }else if(filter === "Sunset"){
            // Sunset
                $("img").css("filter", "contrast(115%) hue-rotate(-10deg) saturate(180%)");
        }
    
    
        
    
    
    
});

$(".reset").click(function() {
    $("img").css("filter", "");
});
