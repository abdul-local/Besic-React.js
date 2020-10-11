var angkaX=[1,2,3,4];
//var angkaY=angkaX;
//console.log(angkaY);
//angkaY[0]=7;
//console.log(angkaY);
//console.log(angkaX);

// pada code di atas jelas memuculkan angka yg sama karena clone tidak bisa dengan sama dengan
// spread syntax

//var angkaY=[...angkaX];
//angkaY[0]=7;
//console.log(angkaY);
//console.log(angkaX);
//
//var namaMahasiswaB=['abdul','hipzil','bianca'];
//var namaMahasiswa=['andre','riza',...namaMahasiswaB,'pinka'];
//console.log(namaMahasiswa);
//
//var perkalianlimaangka=(a,b,c,d,e)=>a*b*c*d*e;
//var data=[1,2,3,4,5];
//
//// menggunakan cara manual
//var hasil1=perkalianlimaangka(data[0],data[1],data[2],data[3],data[4]);
//
//// menggunakan spred sintax
//var hasil=perkalianlimaangka(...data);
//console.log(hasil);
//console.log(hasil1);
//var huruf=['a','b','c','d','e','f','g','h','i','j'];
//var [hurufpertama]=huruf;
//console.log(hurufpertama); // hasil a
//var[hurufpertama,...sisaelement]=huruf;
//console.log(sisaelement);
//
//

// penggunaan destructuring pada object saja
//var nilai ={
//    andi:80,
//    budi:90,
//    zul:100,
//    arman:70,
//    dena:100,
//}
//
//// mengambil nilai budi dengan cara baru
//var {budi}=nilai;
//console.log(budi);
//
//// mengamvil nilai dengan cara lama
//console.log(nilai.budi);

//Object Literal Enhancement
var nama='abdul';
var usia='18 tahun';
var jeniskelamin='laki-laki';

// deklarasikan dengan object dengan cara biasa
var object={
    nama:nama,
    usia:usia,
    jeniskelamin:jeniskelamin,
    hobby:'leraning program',
}
// deklarasikan oject dengan OLE
var object1={
    nama,
    usia,
    jeniskelamin,
    hobby:'dangdutan'
}

console.log(object);
console.log(object1);



















