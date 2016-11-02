'use strict';

var sequence = [];
var userpattern = [];


function round() {
    console.log(animate(sequence));
    var color = Math.floor(Math.random() * 4) + 1;
    console.log(color);
    sequence.push(color);
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
}

function flash(square) {
    $('[data-tile=' + square + ']').addClass('squareflash');
    window.setTimeout(function () {
        $('[data-tile=' + square + ']').removeClass('squareflash');
    }, 500);
}

$('.square').click(function () {
    $(this)
        .animate({"opacity": "1"})
        .animate({"opacity": ".5"})
    ;
    console.log('it works');
});

function userInput() {

    $('.square').click(function () {
        userpattern.push($(this).attr('id'));
        console.log(userpattern);
    });
}
userInput();

function match() {
    if (userpattern = sequence) {

    }

    else {

        alert('YOU LOSE!')

    }
}