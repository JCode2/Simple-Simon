'use strict';

var sequence = [];
var userpattern = [];


function round() {
    var colors = ["blue", "red", "gold", "pink"];
    var color = Math.floor(Math.random() * 4);

    animate(sequence);
    sequence.push(colors[color]);
}

function animate(sequence) {
    var i = 0;
    var interval = setInterval(function () {
        flash(sequence[i]);
        i++;
        if (i == sequence.length) {
            clearInterval(interval);
        }
    }, 500);

    console.log('WORK DAMN YOU')
}

function flash(square) {
    $('[data-tile="' + square + '"]').addClass('squareflash');
    window.setTimeout(function () {
        $('[data-tile="' + square + '"]').removeClass('squareflash');
    }, 500);
}

$('.square').click(function () {
    $(this)
        .animate({"opacity": "1"})
        .animate({"opacity": ".5"});

    userpattern.push($(this).attr('id'));

    match();

    console.log('it works');
});

function match() {

    if (userpattern.toString() != sequence.toString()) {
        alert('YOU LOSE!')
    }

    else {

        alert('That is correct. Click ok to continue')

    }
}
