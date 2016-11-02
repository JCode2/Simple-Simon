'use strict';

var pattern = [];
var sequence = [];

//var sequence1 = ["1","1,1", "1,1,2", "1,1,2,4"];
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
