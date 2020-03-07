//destructuring assignment

//   Expression pada javascript yg memuat kita dapat 'membongkar' nilai dari array atau properti dari object kedalam variable yang terpisah

//Array
const hari = ["senin", "selasa", "rabu", "kamis"];

const [a, b, c, d] = hari;
console.log(a); //senin
console.log(b); //selasa
console.log(c); //rabu
console.log(d); //kamis

//object
const guru = {
  nama: "Ricky Pratama",
  umur: 22,
  email: "ricky@gmail.com"
};

const { nama, umur, email } = guru;
console.log(nama); //Ricky Pratama
console.log(umur); //22
console.log(email); //ricky@gmail.com
