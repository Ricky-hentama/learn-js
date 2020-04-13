// syncronous
// function halo(nama) {
//   alert(`halo ${nama}`);
// }

// function panggil(callback) {
//   var a = prompt("nama kamu");
//   callback(a);
// }
// panggil(halo);

// asyncronous

$(".nama").click(function () {
  $.ajax({
    url: "guru.json",
    data: "json",
    dataType: "text",
    success: function (data) {
      JSON.parse(data).forEach((e) => {
        console.log(e.nama);
      });
    },
    error: function (data) {
      console.log(data);
    },
  });
});
