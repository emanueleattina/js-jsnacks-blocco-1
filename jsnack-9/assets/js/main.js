// somma e media dei primi 10 numeri

var somma = 0;
var media = 0;
var numero;
var i;

for(i = 0; i < 10; i++)
{
  somma = somma + i;
}

media = somma / 10;
console.log(somma);
console.log(media);

document.getElementById('somma').innerHTML = "Somma = " + somma;
document.getElementById('media').innerHTML = "Media = " + media;