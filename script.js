

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


/* eliminata perchè con questo non mi funzionava */
// const btn_autentication = document.querySelector("#autentication");
// console.log(btn_autentication);

// btn_autentication.addEventListener("click", function() {

//   const user_mail = document.getElementById('mail').value;
//   console.log(user_mail);

// });

let mail_presente = false;

for (let x = 0; x < user_authorized.length; x++){

  if (user_authorized[x] === user_mail){
    mail_presente = true;
  }
}


if (mail_presente = false){
  document.getElementById("output").innerHTML = "Attenzione: Non hai l'autorizzazione!";
} else{
  document.getElementById("output").innerHTML = "Ci siamo, ora sei pronto a giocare";
}


// Gioco dei dadi



// const bottone_dadi = document.getElementById("#bottone-dadi");
// // const bottone_rilancia = document.getElementById("#bottone-rilancia");

// // console.log(bottone_rilancia);

// const container_risultati_dadi = document.getElementById("#container_risultati_dadi");

// // coccnsole.log(container_risultati_dadi);

// bottone_dadi.addEventListener("click", function(){

//   container_risultati_dadi.classList.remove("hide");
//   bottone_rilancia.classList.remove("hide");


// });

