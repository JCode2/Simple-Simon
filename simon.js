'use strict';

var sequence = [];      //empty arrays to push to //
var userpattern = []; //**//\


function round() {
    var colors = ["blue", "red", "gold", "pink"]; //an array of colors that will be associated with //
    var color = Math.floor(Math.random() * 3);  //creates a random number between 0 - 3 //

    userpattern = [];
    sequence.push(colors[color]);       //associates the random number with the color number in the color array //
    animate(sequence);
    console.log(sequence);
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
    console.log(sequence);
    console.log('WORK DAMN YOU');
}

//function that adds and removes class squareflash to show the sequence//

function flash(square) {
    $('[data-tile="' + square + '"]').addClass('squareflash');
    window.setTimeout(function () {
        $('[data-tile="' + square + '"]').removeClass('squareflash');
    }, 500);
}

//When you click a tile opacity changes, also pushes clicks to an array and compares it to the sequence array//

$('.square').click(function () {
    $(this)
        .animate({"opacity": "1.25"})
        .animate({"opacity": ".5"});

    userpattern.push($(this).attr('id'));

    match();

    console.log('it works');
});

//Checks if userpattern array equals sequence array//

function match() {
    console.log(userpattern);
    if (userpattern.length == sequence.length) {


        if (userpattern.toString() != sequence.toString()) {  //not comparing the way i want
            alert('YOU LOSE!');
            document.getElementById('start').innerHTML = "Start Over"
        }

        else {

            //alert('That is correct. Click ok to continue');

            round();
            document.getElementById('round').innerHTML = "<h3>Round " + parseInt(sequence.length) + "</h3>";
            console.log(sequence);
        }
    }
}

function initialround() {
    $('#start').click(function () {
        document.getElementById('round').innerHTML = "<h3>Round 1 </h3>";
    })


}
initialround();