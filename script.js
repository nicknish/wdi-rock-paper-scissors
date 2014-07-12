function userSelection(obj) {


    /* Set Variables 
		============================ */
    var selection = obj.id; // Cache which button is being pressed
    var responder = document.getElementById('computerHand');
    // var result = document.getElementById('result'); // For styling purposes


    /* Generate Random Choice 
    ============================= */
    var computerGenerated = Math.random() * 100; // Generate random computer number	
    var computerHand;
    if (computerGenerated <= 33.34) { // Decide what computer hand is
        computerHand = 'rock';
    } else if (computerGenerated > 33.34 && computerGenerated <= 66.67) {
        computerHand = 'paper';
    } else {
        computerHand = 'scissors';
    }


    /* The Game
    =========================== */
    if (selection == 'rock') {
        if (computerHand == 'rock') {
            responder.innerHTML = "Rock – Rock! It's a tie!";
            // alert("Rock – Rock!\n" + "It's a tie!");
        } else if (computerHand == 'paper') {
            responder.innerHTML = "Rock – Paper! You got wrapped – You lose!";
            // alert("Rock – Paper!\n" + "You lose!");
        } else {
            responder.innerHTML = "Rock – Scissors! You destroyed those scissors. Nice!";
            // alert('Rock – Scissors!\n' + 'You destroyed those scissors. Nice!');
        }
    } else if (selection == 'paper') {
        if (computerHand == 'paper') {
            responder.innerHTML = "Paper – Paper! It's a tie!";
            // alert("Paper – Paper!\n" + "It's a tie!");
        } else if (computerHand == 'scissors') {
            responder.innerHTML = "Paper – Scissors! Sliced! You lose!";
            // alert("Paper – Scissors!\n" + "You lose!");
        } else {
            responder.innerHTML = "Paper – Rock! You crumpled that rock. Nice!";
            // alert('Paper – Rock!\n' + 'You crumpled that rock. Nice!');
        }
    } else if (selection == 'scissors') {
        if (computerHand == 'scissors') {
            responder.innerHTML = "Scissors – Scissors! It's a tie!";
            // alert("Scissors – Scissors!\n" + "It's a tie!");
        } else if (computerHand == 'rock') {
            responder.innerHTML = "Scissors – Rock! Who would have thought? You lose!";
            // alert("Scissors – Rock!\n" + "You lose!");
        } else {
            responder.innerHTML = "Scissors – Paper! You sliced that paper. Nice!";
            // alert('Scissors – Paper!\n' + 'You sliced that paper. Nice!');
        }
    }

}