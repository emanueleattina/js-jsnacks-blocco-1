//l'utente inserisce due numeri
//stampare il maggiore

var numUno
var numDue
var numMax

numUno = parseInt(prompt("Inserisci il primo numero:"));
numDue = parseInt(prompt("Inserisci il secondo numero:"));

if (numUno > numDue)
{
  numMax = numUno;
}
else
{
  numMax = numDue;
}

document.getElementById('numMax').innerHTML = "Il numero maggiore è " + numMax;
