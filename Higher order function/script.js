// Higer Order Function
/* adalah function yang beroperasi pada function yang lain, baik itu digunakan dalam argument maupun sebagai return value*/

//ex1
function tugas(mapel, selesai) {
  //function tugas adalah higer order function dan parameter selesai adalah callback
  console.log(`Sedang mengerjakan tugas ${mapel}....`);
  selesai();
}

function selesai() {
  alert("Tugas selesai!");
}

tugas("matematika", selesai);

//ex2
setTimeout(function() {
  //setTimeout sebagai higer order func, dan func didalamnya sebagai callback
  console.log("hello");
}, 1000);

//ex3
function ulangi(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
