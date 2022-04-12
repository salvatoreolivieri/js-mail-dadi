

/* Key Point:
  1. Creare una lista di utenti autorizzati (array)
  2. Permetti solo agli utenti autorizzati di accedere (condition if)
  3. Stampa un messaggio appropriato sull’esito del controllo (true/false)
  4. Una volta loggato invitiamo l'utente a giocare con i dadi.
  5. Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
  6. StabilKKire il vincitore, in base a chi fa il punteggio più alto.
*/


// lista utenti autorizzati
const user_authorized = [
  "Salvatore.olivieri07@gmail.com",
  "Luca.golinelli@gmail.com",
  "Stefano.cavazza@gmail.com"
]


// raccolgo la mail dell'utente
const user_mail = prompt("Inserisci la tua mail per giocare");


// Processo di autentificazione
let correct_mail = false; 

for (let x = 0; x < user_authorized.length; x++) {

  if (user_authorized[x] === user_mail){
    correct_mail = true;
  } 

}

const bottone_dadi = document.getElementById("bottone-dadi");
const bottone_refresh = document.getElementById("bottone-refresh");


if (correct_mail === true) {
  document.getElementById("output").innerHTML = "Ci siamo, ora sei pronto a giocare";
  bottone_refresh.className = "hide";

} else {
  document.getElementById("output").innerHTML = "Non sei autorizzato";
  bottone_dadi.className = "hide";

} 


// Regole e logica gioco dadi

let UserPlayer; 
let PcPlayer; 

bottone_dadi.addEventListener("click", function(){
  UserPlayer = Math.ceil(Math.random() *6);
  PcPlayer = Math.ceil(Math.random() *6);

  console.log("UserPlayer:", UserPlayer);
  console.log("PcPlayer:", PcPlayer);

  if (UserPlayer > PcPlayer){
    console.log("Hai Vinto");
  } else if (UserPlayer < PcPlayer){
    console.log("Hai Perso");
  } else {
    console.log("Pareggio");
  }
});

