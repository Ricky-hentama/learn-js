//spread operator

//memecah iterables menjadi single element
const mhs = ["ricky", "agung", "dimas"];

console.log(mhs); //hasilnya array

console.log(...mhs); // ricky agung dimas

console.log(...mhs[0]); // r i c k y

//menggabungkan 2 array

const teknisi = ["hendi", "samsu", "roso"];
const administrasi = ["mega", "dika", "agil"];
const gabung = [...teknisi, ...administrasi];

console.log(gabung);

//mengcopy array
/* kita bisa saja menggunakan const atlit2 = atlit,
namun itu hanya cerminan saja. maksudnya jika salah satu array ada yg diubah maka keduanya akan berubah
*/
const atlit = ["Reza", "Adit", "Fajar"];
const atlit2 = [...atlit, "janu"];

console.log(atlit2);

let h1 = document.querySelector(".nama");
let huruf = [...h1.textContent].map(h => `<span>${h}</span>`).join("");
h1.innerHTML = huruf;
console.log(h1);
