// $( document ).ready(function(){
var Random = Math.floor(Math.random() * 102 + 19)

$("#target").text(Random);
console.log(Random)

var crys4 = Math.floor(Math.random()*12+1)
var crys2 = Math.floor(Math.random()*12+1)
var crys3 = Math.floor(Math.random()*12+1)
var crys1 = Math.floor(Math.random()*12+1)


var totalScore = 0;
var wins = 0;
var losses = 0;

$("#wins").text(wins);
$("#losses").text(losses);

function reset() {
    Random = Math.floor(Math.random() * 102 + 19);

    $("#target").text(Random);
    crys4 = Math.floor(Math.random()*12+1);
    crys2 = Math.floor(Math.random()*12+1);
    crys3 = Math.floor(Math.random()*12+1);
    crys1 = Math.floor(Math.random()*12+1);
    totalScore = 0;
    $("totalScore").text(totalScore);

}
function winner() {
    alert("Winner Winner Chicken Dinner!");
    wins++;
    $('#wins').text(wins);
    reset();
}

function loser() {
    alert("Gameover!");
    losses++;
    $('#losses').text(losses);
    reset()
}

$(crys4).on('.click', function () {
    totalScore = totalScore + crys4;
    $('#totalScore').text(totalScore);
    if (totalScore == Random) {
        winner();
    }
    else if (totalScore > Random)
        loser();
})

$(crys2).on('.click', function () {
    totalScore = totalScore + crys2;
    $('#totalScore').text(totalScore);
    if (totalScore == Random) {
        winner();
    }
    else if (totalScore > Random)
        loser();
})

$(crys3).on('.click', function () {
    totalScore = totalScore + crys3;
    $('#totalScore').text(totalScore);
    if (totalScore == Random) {
        winner();
    }
    else if (totalScore > Random)
        loser();
})

$(crys1).on('.click', function () {
    totalScore = totalScore + crys1;
    $('#totalScore').text(totalScore);
    if (totalScore == Random) {
        winner();
    }
    else if ( totalScore > Random)
        loser();
})

function crystals(){
    return crystals;
};
