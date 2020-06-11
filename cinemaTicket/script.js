$(".xiaBanBuFen").hide();
$(".buy").hide();
$(".jianJie").hide();
$(".movieIntroduction").hide();
$(".jianJieButtonAndpingLunButton").attr("id","jianJieButton");
let 电影名 = {
  Sonic: "索尼克",
  Mulan: "花木兰",
  spiesInDisguise: "变身特工",
  Bridges: "21座桥"
};

//  电影简介
let 电影简介 = {
  Sonic: "《刺猬索尼克》改编自世嘉公司出品的风靡全球的电子游戏。电影讲述了拥有音速奔跑能力的刺猬索尼克在地球上展开新生活的故事。索尼克将和他的新朋友汤姆（詹姆斯·麦斯登 饰）联手保护地球，阻止邪恶的蛋头博士（金·凯瑞 饰）统治世界的计划。这部适合全家观看的电影还邀请了迪卡·桑普特参演，本·施瓦茨为索尼克配音。",
  Mulan: "在古代中国，一位年轻的女子为了救她的父亲假扮成男装代父从军。在穿越中国广袤土地的壮丽征程中，她从紧张的训练和战争中存活下来，发现自己内心的战士，并且最终从外族侵略者手中救回了皇帝和她的祖国。。 刘亦菲饰演花木兰，Yoson An饰演花木兰恋人，李连杰饰演皇帝，巩俐饰演反派女巫，越南华裔女Xana Tang饰演花木兰的姐妹，甄子丹饰演花木兰的导师tung。",
  spiesInDisguise: "超级间谍兰斯·斯特林（威尔·史密斯 配音）和科学家沃尔特·贝克特（汤姆·赫兰德 配音）几乎是完全相反的两个人。兰斯圆滑而又温文尔雅，而沃尔特……完全不是这样。但是沃尔特用他的聪明才智和发明创造弥补了社交能力的不足，他制作了一些令人生畏的小道具以供兰斯用在他的伟大任务中。当事情发生了意想不到的转折时，沃尔特和兰斯突然间不得不以一种全新的方式依赖对方。如果这对搭档学不会作为一个团队共同作战，整个世界就将处于危险之中。",
  Bridges: "影片风格据称类似《局内人》和《亡命天涯》，博斯曼饰一个蒙羞的纽约警局警探，因为被卷入一场全城范围的追捕某警察杀手的行动，获得了赎罪机会——他发现了一起巨大的阴谋：自己的警察同事可能跟一个犯罪帝国有关联。他必须决定到底要追捕谁，而谁其实又在追捕他。在这起行动中，曼哈顿在历史上第一次全境封锁，岛上与外界联系的17座桥全部禁止进出。"
}


let ciShu = 0;   //用户第几次点击海报
let lastPoster;   //用户上一次点击的海报
//  单击海报时
$("img").click(function () {
  $(".jianJie").show();
  $(".xiaBanBuFen").show();

  var poster;
  poster = $(this).attr("id");
  visualCues(poster);
  filmReview(poster);
  filmIntroduction(poster);



  lastPoster = poster;
});

//  单击电影简介/电影评论按时
$(".jianJieButtonAndpingLunButton").click(function(){
  let zhuangTai = $(this).attr("id")
  if (zhuangTai === "jianJieButton") {
    $(this).removeAttr("id");
    $(".movieReviews").hide();
    $(".movieIntroduction").show();
    $(this).attr("id","pingLunButton");
    $(this).text("电影评论");
  }else{
    $(this).removeAttr("id");
    $(".movieIntroduction").hide();
    $(".movieReviews").show();
    $(this).attr("id","jianJieButton");
    $(this).text("电影简介");
  }
});

//  单击计算总数按钮时
$(".calculateTotal").click(function () {
  let numberChild = $(".numberChild").val();
  let numberAdult = $(".numberAdult").val();

  let cost = costCalculation(numberChild, numberAdult);
  warning(cost);
});

//  单击购买按钮是
$(".buy").click(function(){
  $(".movieSelection").hide();
  $(".xiaBanBuFen").hide();
      $("body").html('<img class="final" src="giphy.gif" />');
});

// 会有视觉提示(艺文,家祥)
function visualCues(poster) {
  ciShu++;
  //艺文和家祥的
  if (ciShu !== 1) {
    $("img").removeClass(lastPoster);
  }
  if (poster === "Sonic") {
    $("#" + poster).addClass('Sonic');

  } else if (poster === "Mulan") {
    $("#" + poster).addClass('Mulan');

  } else if (poster === "spiesInDisguise") {
    $("#" + poster).addClass('spiesInDisguise');

  } else {
    $("#" + poster).addClass('Bridges');
  }

}

// 会显示该电影的评论(光明)
function filmReview(poster) {
  let movieReviewPikachu = [
    "今年最好的电影是爱",
    "我笑了，我哭了，然后我又笑了，真的很爱",
    "看完这部电影后我无法入睡，因为我爱"
  ]
  let zongPingLun = "";

  for (pingLun of movieReviewPikachu) {
    zongPingLun = zongPingLun + '<p>' + pingLun + 电影名[poster] + '</p>';
  }

  $(".movieReviews").html(zongPingLun);
}

// 会显示给电影的简介
function filmIntroduction(poster){
  $(".movieIntroduction").text(电影简介[poster]);
}

// 会计算用户输入的成人票和儿童票的总费用(中涵)
function costCalculation(numberChild, numberAdult) {

  let cost = numberChild * 8 + numberAdult * 12;

  return cost;
}

// 会根据计算的结果，显示信息(雨城)
function warning(cost) {

  let oreos = cost;
  oreos = Number(oreos);
  if (oreos < 0) {
    alert("您的选择不能为负数");
  }
  if (oreos === 0) {
    alert("您没有选择任何票务");
  }
  if (oreos > 0) {
    alert("您的总费用" + cost + "元");

    $(".buy").show();//显示购买按钮
  }
  if (oreos === "") {
    alert("请输入");
  }

}
