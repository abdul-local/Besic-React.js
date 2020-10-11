// ES5
 function perkalian(a,b){
     return a*b;
 }

// arrow function

var perkalianArrow =(a,b)=>a*b;

var perkalianArrow2=(a,b)=>{
    return a*b;
}
// memanggil fungsi
console.log(perkalian(5,10));
console.log(perkalianArrow(5,10));
console.log(perkalianArrow2(5,10));

function sayHellow(){
    console.log('hellow, Iam codepolitan')
    
}

// codingan diatasa tanpa paramter dapat diganti dengan
 var newsayHellow=()=> {
    console.log('hellow,Iam codepolitan')
}

function greeting(guestname){
    return `Welcome back to Codepolitan,${guestname}`
}
// kode diatas bisa diganti
var newGriting=guesname=>`welcome back Codepolitan, ${guestname}`;
newsayHellow();
var angka =[1,2,3,4]

var angkaBaru = angka.map(function(element){
    return element*2;
})

// kode di atas bisa diganti dengan

var angkabarunew = angka.map(elemenet=>element*2);
console.log(angkaBaru);