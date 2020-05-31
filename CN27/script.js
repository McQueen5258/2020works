let names = [];
let deposits = [];

let sums = 0;
let freq = 0;

let deposit = "";
let name = "";




$(".newDeposit").click(function() {
    deposit = $(".accountDeposit").val();
    name = $(".accountName").val();

    if (deposit !== "" || name !== "") {
        

    depositSum = Number(deposit);

        names.push(name);
        deposits.push(depositSum);
        
        sums = 0;
        for (const sum of deposits) {
            sums = sums+sum;
        }
        freq = deposits.length;

        $(".records").append(`<p> ${name}</p><p class='recordsBorder'>$ ${deposit}</p>`);
        $(".jiaoYiBiShu").text(freq);
        $(".cunKuanZongE").text(sums);

        $(".accountName").val("");
        $(".accountDeposit").val("");
    }else{
        alert("您未输入姓名或金额");
    }

});
$(".update").click(function(){
    if (deposit !== "" || name !== "") {
        let zuanJi = '最近的一笔交易如下：\n'+names[names.length-1]+'\n'+deposits[deposits.length-1];
        alert(zuanJi);
    }else{
        alert("您未输入姓名或金额");
    }
});