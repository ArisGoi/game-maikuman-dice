// ------ Dice Game V1 -------
// // 1) genero un numero casuale per l'utente e uno per il banco
// var userDice = parseInt(Math.random() * 6) + 1;
// var cpuDice = parseInt(Math.random() * 6) + 1;

// // 2) creo una variabile che contiene i risultati
// var risultati = 'il tuo dado: ' + userDice + '   il dado del banco: ' + cpuDice;

// // 3) Stabilisco il vincitore e mostro i risultati e l'esito
// if (userDice > cpuDice){
//     alert(risultati + '   HAI VINTO!!')
// } else if (userDice < cpuDice){
//     alert(risultati + '   HAI PERSO!')
// } else{
//     alert(risultati + '   HAI UN PAREGGIO!')
// }


// ---------------------------
// ------ Dice Game V2 -------
// ----------vvvvv------------

// valore di parteza del portafogli
var myWallet = 100;

// array con le icone dei dadi
var diceFace = ['error 0', '<i class="fas fa-dice-one"></i>', '<i class="fas fa-dice-two"></i>', '<i class="fas fa-dice-three"></i>', '<i class="fas fa-dice-four"></i>', '<i class="fas fa-dice-five"></i>', '<i class="fas fa-dice-six"></i>']


function rollDice(){

    if (isNaN(parseInt(document.getElementById('my_bit').value)) || document.getElementById('my_bit').value < 1){
        document.getElementById("alert").classList.remove("hide");
    } else {
        // Tiro i dadi
        var userDice = parseInt(Math.random() * 6) + 1;
        var cpuDice = parseInt(Math.random() * 6) + 1;

        // Mostro il numero uscito
        document.getElementById('user_dice').innerHTML = diceFace[userDice];
        document.getElementById('cpu_dice').innerHTML = diceFace[cpuDice];

        // ottengo il valore della scommessa
        var myBit = parseInt(document.getElementById('my_bit').value);

        if (userDice > cpuDice){ // VINTO
            
            // Sommo la scommessa al valore del portafogli
            myWallet = myWallet + myBit;
            // sovrascrivo il portafogli
            document.getElementById('user_wallet').innerHTML = myWallet;
            // Comunico l'esito della giocata
            document.getElementById('esito').innerHTML = "WOW!! hai vinto " + myBit + "€";

        } else if (userDice < cpuDice){ // PERSO

            // sottraggo la scommessa al valore del portafogli
            myWallet = myWallet - myBit;
            // sovrascrivo il portafogli
            document.getElementById('user_wallet').innerHTML = myWallet;
            // Comunico l'esito della giocata
            document.getElementById('esito').innerHTML = "Peccato! hai perso: " + myBit + "€";

        } else{ // PAREGGIO

            // Comunico l'esito della giocata
            document.getElementById('esito').innerHTML = "Hai un Pareggio!";
        }
    }

    if (myWallet <= 0){
        document.getElementById("loseAlert").classList.remove("hide")
    }
}

function addHide(){
    document.getElementById("alert").classList.add("hide");
}