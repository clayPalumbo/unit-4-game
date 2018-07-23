//Crystal Collector Game
//Created by Clay Palumbo

//Crystal birds random #
$(document).ready(function() {
    crystalNumber = Math.floor(Math.random() * 120 + 19);
    $('#cbNumber').text(crystalNumber);
});

var crystalNumber = Math.floor(Math.random() * 120 + 19);
var randomNumbers = [];     //4 cyrstals number array
var total = 0;              //total 
var wins = 0;               //win count
var losses = 0;             //loss count
$('#wins').text(wins);
$('#losses').text(losses);

//loop for 4 jewels #'s
function fourRandomNumbers () {
    for (var i =0; i < 4; i += 1) {
        var num = Math.floor(Math.random() * 12 + 1);
        randomNumbers.push(num);
    }
}
fourRandomNumbers();

//reset
function reset() {
    crystalNumber = Math.floor(Math.random() * 120 + 19);
    $('#cbNumber').text(crystalNumber);
    randomNumbers = [];
    fourRandomNumbers ();
    total = 0;
    $('#yourNumber').text(total);
}

//adds wins
function youWon() {
    alert('You Won!');
    wins += 1;
    $('#wins').text(wins);
    reset();
}

//adds losses
function youLose() {
    alert('You Lost!');
    losses += 1;
    $('#losses').text(losses);
    reset();
}

//connecting clicks for jewels
$('#blue').on("click", function() {
    total = total + randomNumbers[0];
    $('#yourNumber').text(total);

    //win/lose conditions
    if (total == crystalNumber) {
        youWon();
    }
    else if (total > crystalNumber) {
        youLose();
    }
})

$('#green').on("click", function() {
    total = total + randomNumbers[1];
    $('#yourNumber').text(total);

    //win/lose conditions
    if (total == crystalNumber) {
        youWon();
    }
    else if (total > crystalNumber) {
        youLose();
    }
})

$('#purple').on("click", function() {
    total = total + randomNumbers[2];
    $('#yourNumber').text(total);

    //win/lose conditions
    if (total == crystalNumber) {
        youWon();
    }
    else if (total > crystalNumber) {
        youLose();
    }
})

$('#yellow').on("click", function() {
    total = total + randomNumbers[3];
    $('#yourNumber').text(total);

    //win/lose conditions
    if (total == crystalNumber) {
        youWon();
    }
    else if (total > crystalNumber) {
        youLose();
    }
});
