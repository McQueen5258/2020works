$("button").click(function () {
  let 电视连续剧名字 = $(".电视连续剧名字").val();
  let request_url = "https://api.tvmaze.com/search/shows?q="+电视连续剧名字;

  fetch(request_url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let pic_url = data[1].show.image.medium;
      $("body").append(`<img src='${pic_url}'>`);
    });
});
