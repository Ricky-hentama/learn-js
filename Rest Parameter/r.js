//Rest Parameter

function nomor(a, ...args) {
  return args;
}
console.log(nomor(1, 2, 3, 4));

//menjumlahkan semua parameter menggunakan rest parameter
function jumlah(...no) {
  return no.reduce((a, b) => a + b);
}
console.log(jumlah(10, 20, 30));
