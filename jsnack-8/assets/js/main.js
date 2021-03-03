// chiedere un numero di 4 cifre

var numero;
var somma = 0;

var unita;
var decine;
var centinaia;
var migliaia;

numero = prompt("Inserisci un numero di 4 cifre: ");
console.log(numero);

unita = numero % 10;
console.log(unita);

decine = Math.floor(numero / 10) % 10;
console.log(decine);

centinaia = Math.floor(numero / 100) % 10;
console.log(centinaia);

migliaia = Math.floor(numero / 1000) % 10;
console.log(migliaia);

somma = unita + decine + centinaia + migliaia;
console.log(somma);

document.getElementById('sommaCifre').innerHTML =  migliaia + " + " + centinaia + " + " + decine + " + " + unita + " = " + somma;