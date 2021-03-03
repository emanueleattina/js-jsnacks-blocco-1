// potenze di 2 fino al 1000

var i;
var maresciallo;
var potenza = 0;

for (i = 0; potenza < 1024; i ++)
{
  potenza = Math.pow(2, i);
  console.log(potenza);
  document.getElementById('potenza').innerHTML += "2 ^ " + i + " = " + potenza + "<br>";
}