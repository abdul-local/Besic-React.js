const konstanta=require('./konstantMatematika');
// Dengan cara pertama
// exports.luaslingkaran=(r)=>{
//     let luas=konstanta.phi*r*r;
//     return luas;
// }
// exports.kelilinglingkaran=(r)=>{
//     let k=2*konstanta.phi*r;
//     return k;
// }

// Dengan Cara kedua
const luaslingkaran=(r)=>{
    let luas=konstanta.phi*r*r;
    return luas;
}
const kelilinglingkaran=(r)=>{
    let k=2*konstanta.phi*r;
    return k;
}
module.exports={luaslingkaran,kelilinglingkaran};
