// Chiediamo all'utente di inserire una parola.
// Creiamo una funzione per capire se la parola inserita sia un palindromo

// 1. Creiamo la funzione verificaPalindromo
function verificaPalindromo(parola) {
  // Invertiamo la string/parola inserita...
  var parolaInverso = parola.split("").reverse().join("");
 // ...e verifichiamo se il risultato è uguale all'originale
  if (parola == parolaInverso) {
// Se sono uguali, la parola inserita è un palindromo
    return true;
  } else {
// Se non lo sono, la parola inserita NON è un palindromo
    return false;
  }
}

// 2. Chiediamo all'utente di digitare una parola
var parolaUtente = prompt("Digita una parola.");

// 3. Verifichiamo tramite la funzione creata se l'input utente sia un verificaPalindromo
if (verificaPalindromo(parolaUtente)) {
  // e stampiamo a video il risultato
  document.getElementById('res').innerHTML = parolaUtente + " è un palindromo";
} else {
  document.getElementById('res').innerHTML = parolaUtente + " NON è un palindromo";
}
