// in un array sono contenuti gli invitati alla festa del grande gatsby
// chiedi all'utente il suo nome e verifica se può partecipare o no alla festa

var lista = ["Pasquale", "Giuseppe", "Andrea", "Giovanni"];
var soldatino = false;
var nomeUtente;
var i;

nomeUtente = prompt("Benvenuto alla festa, fornisca il suo nome per accedere: ");

for (i = 0; i < lista.length; i++)
{
  if (nomeUtente == lista[i])
  {
    soldatino = true;
    
  }
}

if (soldatino == true)
{
  document.getElementById('invitati').innerHTML = "Scusi l'attesa signor " + nomeUtente + ", può accedere alla festa privata.";
}
else
{
  document.getElementById('invitati').innerHTML = "Sono spiacente signor " + nomeUtente + ", il suo nome non è presente in lista.";
}