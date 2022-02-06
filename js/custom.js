
// valore di parteza del portafogli
var myWallet = 100;

// array con le icone dei dadi
var diceFace = ['error 0', '<i class="fas fa-dice-one"></i>', '<i class="fas fa-dice-two"></i>', '<i class="fas fa-dice-three"></i>', '<i class="fas fa-dice-four"></i>', '<i class="fas fa-dice-five"></i>', '<i class="fas fa-dice-six"></i>']


function rollDice(){

    const bitValue = document.getElementById('my_bit').value;
    
    if (isNaN(parseInt(bitValue)) || bitValue < 1 || bitValue > myWallet){
        document.getElementById("alert").classList.remove("hide");
    } else {
        // Tiro i dadi
        var userDice = parseInt(Math.random() * 6) + 1;
        var cpuDice = parseInt(Math.random() * 6) + 1;

        // Mostro il numero uscito
        document.getElementById('user_dice').innerHTML = diceFace[userDice];
        document.getElementById('cpu_dice').innerHTML = diceFace[cpuDice];

        // ottengo il valore della scommessa
        var myBit = parseInt(bitValue);

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