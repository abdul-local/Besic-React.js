// program menghitung luas lingakaran 
//const phi=22/7;
// const konstantamat= require('./konstantMatematika');
// console.log('konstanta',konstantamat);

// const phi=22/7;
// const hitungluas=(r)=>{
//     let luas=konstantamat.phi*r*r;
//     return luas;
// }

// import seluruh data yang ada dimodul
// const lingkaran=require('./lingkaran');

// import sebgaian data dengan cara
const {luaslingkaran} =require('./lingkaran');
const {kelilinglingkaran}=require('./lingkaran');

// let luaslinkaran=lingkaran.luaslingkaran(7);
let luaslinkaran=luaslingkaran(7);

// let kelilinglingkaran=lingkaran.kelilinglingkaran(7);
let kelilinglingkaran1=kelilinglingkaran(7);

console.log(luaslinkaran);
console.log(kelilinglingkaran1);