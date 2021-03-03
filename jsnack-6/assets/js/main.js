//chiedere quanti cubi calcolare

var n;
var cubo;
var i;
// var arrayCubi = [];
var x = 0;
var y = 0;

n = parseInt(prompt("Quanti cubi vuoi calcolare?"));
n = n + 1;

for(i = 1; i < n; i++)
{
  cubo = i * i * i;
  x = i;
  y = cubo;
  // arrayCubi.push(cubo)
  document.getElementById('cubo').innerHTML += "Il cubo di " + x + " è " + y +" <br>";
  console.log(cubo);
}

// console.log(arrayCubi);
// document.getElementById('cubo').innerHTML = arrayCubi;


// var n;

// n = prompt("Quanti cubi vuoi calcolare?");

// for(var i = 0; i < n; i++)
// {
//   document.getElementById('cubo').innerHTML += ("Il cubo di " + i + " è " + Math.pow(i, 3) + "<br>")
//   console.log(i, Math.pow(i, 3));
// }