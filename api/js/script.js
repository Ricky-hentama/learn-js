$.ajax({
  type: "method",
  url: "http://www.omdbapi.com/?apikey=84244aeb&s=avengers ",
  data: "json",
  dataType: "text",
  success: function (data) {
    console.log(data);
  },
});
