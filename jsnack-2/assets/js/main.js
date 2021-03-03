//l'utente inserisce due parole
//stampare la parola più corta e poi la parola più lunga

var parolaUno
var parolaDue

parolaUno = prompt("Inserisci la prima parola:").trim();
parolaDue = prompt("Inserisci la seconda parola:").trim();

if (parolaUno.length > parolaDue.length) {
  document.getElementById('parole').innerHTML = "La parola più corta è " + parolaDue + "<br>La più lunga " + parolaUno;
}
else {
  document.getElementById('parole').innerHTML = "La parola più corta è " + parolaUno + "    d<br>La più lunga " + parolaDue;
}