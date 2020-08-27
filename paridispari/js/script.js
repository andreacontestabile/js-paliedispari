/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// 1. Creiamo una funzione per generare un numero random (tra 1 e 5) per il computer
function randomComputer() {
  var numeroComputer = Math.floor(Math.random() * 5) + 1;
  return numeroComputer;
}

// 2. Creiamo una funzione per verificare se un numero è pari o dispari
function pariDispari(num) {
  if (num % 2 == 0) {
    return true
  } else {
    return false
  }
}

// 3. Chiediamo all'utente di scegliere PARI o DISPARI (l'utente può scrivere solo quelle due parole)
do {
  var pariDispariUtente = prompt("Pari o dispari?");
} while ((pariDispariUtente.toLowerCase() != "pari") && (pariDispariUtente.toLowerCase() != "dispari"));

// 3.5 Usiamo una variabile per tracciare la scelta dell'utente
var isPari = false;
if (pariDispariUtente.toLowerCase() == "pari") {
  isPari = true;
}

// 4. Chiediamo all'utente di scegliere un numero tra 1 e 5 (l'utente può inserire soltanto valori compresi tra 1 e 5)
do {
  var numeroUtente = parseInt(prompt("Scegli un numero tra 1 e 5"));
} while (numeroUtente < 1 || numeroUtente > 5);

// 5. Generiamo un valore casuale tra 1 e 5 usando la funzione creata in precedenza. Salviamo il valore in una variabile.
var numeroComputer = randomComputer();

// 6. Salviamo in una variabile la somma tra il numero generato e il numero dell'utente
var sommaNumeri = numeroComputer + numeroUtente;

// 7. Verifichiamo se la somma è PARI o DISPARI, utilizzando la funzione creata in precedenza
// Personalizziamo il messaggio di conseguenza
if (pariDispari(sommaNumeri)) {
  var messaggioSomma = sommaNumeri + " è un numero PARI";
} else {
  var messaggioSomma = sommaNumeri + " è un numero DISPARI";
}

// 8. Infine, confrontiamo il risultato della verifica con la scelta dell'utente. Comunichiamo all'utente se ha vinto...
if ((pariDispari(sommaNumeri) && isPari) || (!pariDispari(sommaNumeri) && !isPari)) {
  var chiHaVinto = "Congratulazioni, hai vinto!";
} else {
  var chiHaVinto = "Mi dispiace, ha vinto il computer...";
}

// 9. Stampiamo a video i messaggi in base ai risultati ottenuti
document.getElementById('res').innerHTML = "Hai scelto..." + pariDispariUtente.toUpperCase() + "</br>"
                                            + "Il numero che hai scelto è " + numeroUtente + "</br>"
                                            + "Il numero del computer è " + numeroComputer + "</br>"
                                            + "La somma dei due numeri è " + sommaNumeri + "</br>"
                                            + messaggioSomma + "</br>"
                                            + chiHaVinto;
