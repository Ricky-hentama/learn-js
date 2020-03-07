//Destructuring Function

function kalkulasi(a, b) {
  return [a + b, a - b]; //mengembalikan array
}

//tanpa destructuring
const jumlah = kalkulasi(10, 20)[0];
const kurang = kalkulasi(10, 20)[1];
console.log(jumlah);

//menggunakan destructuring
//namun nama variable harus urut/sama dengan yg ada di dalam function
const [plus, minus] = kalkulasi(20, 20);
console.log(plus); // output : 40

//jika ingin nama variable tidak ingin harus sama/urut dengan yg di function
//maka yg di-return adalah object

function hitung(a, b) {
  return {
    jumlah1: a + b,
    kurang1: a - b
  };
}

const { kurang1, jumlah1 } = hitung(100, 200);
console.log(jumlah1); // output = 300

// Destructuring function 'Arguments'
const mhs = {
  nama: "Ricky Hentama",
  no: 28,
  alamat: {
    kota: "Purwokerto",
    provinsi: "Jawa Tengah"
  }
};

function cetakMhs({ nama, alamat: { kota } }) {
  return `halo nama saya adalah ${nama}, saya tinggal dikota ${kota}`;
}

console.log(cetakMhs(mhs));
