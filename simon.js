'use strict';

var sequence = [];      //empty arrays to push to //
var userpattern = []; //**//\


function round() {
    var colors = ["blue", "red", "gold", "pink"]; //an array of colors that will be associated with //
    var color = Math.floor(Math.random() * 3);  //creates a random number between 0 - 3 //

    userpattern = [];       //clears user input so they can start the sequence from the beginning everytime
    sequence.push(colors[color]);       //associates the random number with the color number in the color array //
    animate(sequence);
    console.log(sequence);
}

function animate(sequence) {
    console.info(sequence);
    var i = 0;
    var interval = setInterval(function () {
        flash(sequence[i]);
        i++;
        if (i == sequence.length) {
            clearInterval(interval);
        }
    }, 1000);
}

//function that adds and removes class squareflash to show the sequence//

function flash(square) {
    $('[data-tile="' + square + '"]')
        .animate({"opacity": "1.25"})
        .animate({"opacity": ".5"});
}

//When you click a tile opacity changes, also pushes clicks to an array and compares it to the sequence array//

$('.square').click(function () {
    $(this)
        .animate({"opacity": "1.25"})
        .animate({"opacity": ".5"});

    userpattern.push($(this).attr('id'));

    match();
});

//Checks if userpattern array equals sequence array//

function match() {

    if (userpattern.toString() != sequence.slice(0, userpattern.length).toString()) {
        alert('YOU LOSE!');
        document.getElementById('start').innerHTML = "Start Over";
        sequence = [];
        return;

    }

    if (userpattern.length == sequence.length) {
        //alert('That is correct. Click ok to continue');
        round();
        document.getElementById('round').innerHTML = "<h2>Round</h2> " + "<h1>" + parseInt(sequence.length) + "</h1>";
    }

}

function initialround() {
    $('#start').click(function () {
        document.getElementById('round').innerHTML = "<h2>Round</h2> <h1> 1 </h1>";
    })


}
initialround();