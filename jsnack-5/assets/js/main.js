// creare array vuoto
// inserire 6 numeri
// verificare i dispari e inserirli nell'array

var dispari = [];
var numUtente
var i;

for(i = 0; i < 6; i++)
{
  numUtente = prompt("Inserisci il " + (i + 1) + "° numero: ");
  if (numUtente % 2 != 0)
  {
    dispari.push(numUtente);
  }
}

document.getElementById('dispari').innerHTML = "Ecco l'array: " + dispari;