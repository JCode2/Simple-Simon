'use strict';

var sequence = [];      //empty arrays to push to //
var userpattern = []; //**//\
//var i;


function round() {
    var colors = ["blue", "red", "gold", "pink"]; //an array of colors that will be associated with //
    var color = Math.floor(Math.random() * 4);  //creates a random number between 0 - 4 //

    animate(sequence);
    sequence.push(colors[color]);       //associates the random number with the color number in the color array //
}

function animate(sequence) {
    var i = 0;
    var interval = setInterval(function () {
        flash(sequence[i]);
        i++;
        if (i == sequence.length) {
            clearInterval(interval);
        }
    }, 300);
    console.log((sequence));
    console.log('WORK DAMN YOU')
}

//function that adds and removes class squareflash to show the sequence//

function flash(square) {
    $('[data-tile="' + square + '"]').addClass('squareflash');
    window.setTimeout(function () {
        $('[data-tile="' + square + '"]').removeClass('squareflash');
    }, 300);
}

//When you click a tile opacity changes, also pushes clicks to an array and compares it to the sequence array//

$('.square').click(function () {
    $(this)
        .animate({"opacity": "1"})
        .animate({"opacity": ".5"});

    userpattern.push($(this).attr('id'));

    match();

    console.log('it works');
});

//Checks if userpattern array equals sequence array//

function match() {

    if (userpattern.toString() != sequence.toString()) {  //not comparing the way i want
        alert('YOU LOSE!')
    }

    else {

        alert('That is correct. Click ok to continue');
        round();
        document.getElementById('round').innerHTML = "<h3>Round " + parseInt(sequence.length) + "</h3>";
        console.log(parseInt(sequence))
    }
}
