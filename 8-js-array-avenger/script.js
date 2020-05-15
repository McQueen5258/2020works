let avengerPics = [
    "0.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png"
];

let avengerNames = [
    "Black Panther",
    "Captain America",
    "Black Widow",
    "Thor",
    "Iron Man"
]


$("button").click(function() {
for (let avenger of avengerNames) {
$(".avengers").append(`<p>${avenger}</p>`);
}

for (let avenger of avengerPics) {
    $(".avengers").append(`<img src= ${avenger}>`);
    
}


});

