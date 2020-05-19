let guests = [];
let numberOfGuests;
$(".addButton").click(function() {
    let guest = $(".guestName").val();
    guests.push('<li>'+guest+'</li>'+'<br>');
    $(".guestList").append(guests[guests.length-1]);
    $("input").val("");
    numberOfGuests = guests.length;
    $(".numberOfGuests").text(numberOfGuests);


});