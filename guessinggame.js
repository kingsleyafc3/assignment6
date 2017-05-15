var cpu_number, number_of_guesses;
function load () {
    window.defaultStatus= "JavaScript Guess-a-Number Game";
    document.game.from.focus();

}

function random() {
    return Math.floor((Math.random() * 100) + 1);

}

function range() {
    alert("CPU has picked a number. Start Guessing");
    number_of_guesses=0;
    cpu_number = random();
}

function guess() {
    var number = document.game.number.value;
    number_of_guesses++;
    if(number_of_guesses == 10)
        alert("Ran out of attempts. CPU random number was " + cpu_number + ". Press START to play again.");
    else if (number < cpu_number)
        document.game.help.value = "CPU number is greater than "+ number + ".";
    else if (number > cpu_number)
        document.game.help.value = "CPU number is less than " + number + ".";
    else
        alert("You guessed it in "+ number_of_guesses + " attempts.");
}