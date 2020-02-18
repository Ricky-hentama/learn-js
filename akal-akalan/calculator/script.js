let hasil = [];
let nilai1 = [];
let nilai2 = [];
let jenisoperasi = [];
//var  operasi
let samadengan = [];

$(".nomor").click(function(e) {
  nilai1.push(parseInt(e.target.innerText));

  $(".layar").text(nilai1.join(""));
});

function operasi(nilai1, nilai2, operasi) {
  if (operasi == "+") {
    nilai1.length -= nilai2.length;
    let nilaiSatu = [parseInt(nilai1.join(""))];
    let nilaiDua = [parseInt(nilai2.join(""))];

    return (hasil = parseInt(nilaiSatu) + parseInt(nilaiDua));
  } else if (operasi == "*") {
    nilai1.length -= nilai2.length;
    let nilaiSatu = [parseInt(nilai1.join(""))];
    let nilaiDua = [parseInt(nilai2.join(""))];
    return (hasil = parseInt(nilaiSatu) * parseInt(nilaiDua));
  } else if (operasi == "/") {
    nilai1.length -= nilai2.length;
    let nilaiSatu = [parseInt(nilai1.join(""))];
    let nilaiDua = [parseInt(nilai2.join(""))];
    return (hasil = parseInt(nilaiSatu) / parseInt(nilaiDua));
  } else if (operasi == "-") {
    nilai1.length -= nilai2.length;
    let nilaiSatu = [parseInt(nilai1.join(""))];
    let nilaiDua = [parseInt(nilai2.join(""))];
    return (hasil = parseInt(nilaiSatu) - parseInt(nilaiDua));
  }
}
//operasi
$(".operasi").click(function(e) {
  $(".layar").text(e.target.innerText);
  $(".nomor").click(function(e) {
    nilai2.push(parseInt(e.target.innerText));

    $(".layar").text(nilai2.join(""));
  });

  // jenisoperasi = "+";
  if (e.target.innerText == "+") {
    jenisoperasi = "+";
  } else if (e.target.innerText == "*") {
    jenisoperasi = "*";
  } else if (e.target.innerText == "/") {
    jenisoperasi = "/";
  } else if (e.target.innerText == "-") {
    jenisoperasi = "-";
  }
});

//akhir operasi
$(".hasil").click(function() {
  operasi(nilai1, nilai2, jenisoperasi);
  $(".layar").text(hasil);
});

// let aku = [1, 5, 9];
// let akuBaru = [parseInt(aku.join(""))];
// console.log(aku.join(""));

// console.log(10 / 2);
