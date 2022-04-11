

/* Key Point:
  1. Creare una lista di utenti autorizzati (array)
  2. Permetti solo agli utenti autorizzati di accedere (condition if)
  3. Stampa un messaggio appropriato sull’esito del controllo (true/false)
  4. Una volta loggato invitiamo l'utente a giocare con i dadi.
  5. Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
  6. StabilKKire il vincitore, in base a chi fa il punteggio più alto.
*/

const user_authorized = [
  "Salvatore.olivieri07@gmail.com",
  "Luca.golinelli@gmail.com",
  "Stefano.cavazza@gmail.com"
]

const btn_autentication = document.querySelector("#autentication");
console.log(btn_autentication);

btn_autentication.addEventListener("click", function() {

  const user_mail = document.getElementById('mail').value;
  console.log(user_mail);

  for (let n = 0; n < user_authorized.length; n++){
  
    let mail_presente = false;
  
    document.getElementById("output").innerHTML = "Non hai l'autorizzazione per giocare";
  
    if (user_mail === user_authorized[n]){
      document.getElementById("output").innerHTML = "Ci siamo, ora sei pronto a giocare";
    }
  
  }
  
});

