//Rest Parameter

function nomor(a, ...args) {
  return args;
}
console.log(nomor(1, 2, 3, 4));
