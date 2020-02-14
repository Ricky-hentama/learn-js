let box = document.querySelector(".box");
box.addEventListener("mouseenter", function() {
  this.classList.toggle("size");
  setTimeout(() => {
    this.classList.toggle("warna");
  }, 300);

  // this.addEventListener("mouseleave", function() {
  //   this.classList.toggle("warna");
  //   setTimeout(() => {
  //     this.classList.toggle("size");
  //   }, 300);
  // });
});

box.addEventListener("mouseleave", function() {
  this.classList.toggle("warna");
  setTimeout(() => {
    this.classList.toggle("size");
  }, 300);
});

//

let namaKaryawan = ["budi", "hendra", "zoro luffy torao kunnnnn"];
const jmlhuruf = namaKaryawan.map(nama => ({ nama, jmlhuruf: nama.length }));

console.table(jmlhuruf);
