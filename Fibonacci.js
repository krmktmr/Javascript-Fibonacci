let istenenFibonacciSayisi = 5;
let sayi1 = 0;
let sayi2 = 1;
let toplam;
let fibonacciSayilari = [];
for(let i = 0; i < istenenFibonacciSayisi; i++){
toplam = sayi1 + sayi2;
sayi1 = sayi2;
sayi2 = toplam;
fibonacciSayilari.push(toplam);
}        
console.log("Fibonacci (" + istenenFibonacciSayisi + ") : " + toplam);