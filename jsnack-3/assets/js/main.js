// il software deve chiedere 10 volte un numero all'utente
// stampare la somma dei numeri

var numero;
var i;
var somma = 0;

for (i = 0; i < 10; i++)
{
  numero = parseInt(prompt("Inserisci il " + (i + 1) + "° numero"));
  somma = somma + numero;
  console.log(somma);
}

document.getElementById('somma').innerHTML = "La somma dei numeri inseriti è: " + somma;
