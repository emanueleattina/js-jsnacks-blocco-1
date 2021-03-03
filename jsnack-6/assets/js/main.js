// chiedere quanti cubi calcolare

var n;
var cubo;
var i;

n = prompt("Quanti cubi vuoi calcolare?")

for(i = 0; i < n; i++)
{
  cubo = i * i * i;
  document.getElementById('cubo').innerHTML = "Il cubo di " + i + " è " + cubo;
  console.log(cubo);
}