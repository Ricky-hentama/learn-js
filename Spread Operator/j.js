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
