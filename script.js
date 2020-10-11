//var angka=[1,2,3,4,5,6,7,8,9,10];
//// penggunaaan filter
//
//// membuat array baru dengan angka element sama persis
//var daftarAngka=angka.filter(element=>true);
//console.log(daftarAngka);
//
//// membuat array baru dengan element angka-angka diatas 4
//var angkaDiatasEmpat=angka.filter(element=>element>4);
//console.log(angkaDiatasEmpat);

// penggunaan findindex lebih ke mencari nilainya
//array.findIndex(element => { statement })
// array of object
//var daftarSiswa =[
//    {id:1,nama:'Aura'},
//    {id:2,nama:'Dian'},
//    {id:3,nama:'Rodi'},
//    {id:4,nama:'charli'},
//]
////mencari posisi rodi
//var indexrodi = daftarSiswa.findIndex(siswa=>siswa.nama =='Rodi');
//console.log(indexrodi);// HASIL 2

// penggunaan splice lebih digunakan untuk menghapus dan menyisipkan element pada array
var namaBulan=['januari','Maret','April'];

// menyisipkan bulan Februari ke index 1
// paramter 1 menyisipkan ke inde berapa, parameter ke 2 nilai yang di hapus dan paramter ke 2 nilai yang diisi
namaBulan.splice(1,0,'Februai');
console.log(namaBulan);
// array of object
var daftarSiswa =[
    {id:1,nama:'Aura'},
    {id:2,nama:'Dian'},
    {id:3,nama:'Rodi'},
    {id:4,nama:'charli'},
]
// mencari posisi Rodi
var indexRodi=daftarSiswa.findIndex(siswa=>siswa.nama =='Rodi');
daftarSiswa.splice(indexRodi,1);
console.log(daftarSiswa);

// Penggunaan method Sort() digunakan untuk mengurutkan array, jika bernilai string maka di urutkan berdasarkan alphabet

//var daftarSiswa=['brian','abdul','dian','rodi','aura'];
//var urutansiswa=daftarSiswa.sort();
//console.log(urutansiswa);

var angka=[3,4,9,1,10];
// menggunakan arrow function
var hasil=angka.sort((a,b)=>a-b);
// dengan menggunakan function
var hasil1=angka.sort(function(a,b){return a-b})
console.log(hasil);
console.log(hasil1);

// penggunaan for
var daftarSiswa =[
    {id: 1, nama:'Abdul'},
    {id: 2, nama:'Bryan'},
    {id: 3, nama:'Charlie'},
    {id: 4, nama:'Diandra'}
]
for(let siswa of daftarSiswa){
    console.log(siswa.nama);
}
































