var totalScore = 0;
var wins = 0;
var losses = 0;
var random = Math.floor(Math.random() * 102 + 19);

//TODO: Your image paths go in this array as strings.
var images = ["./assests/images/crystalFour.jpg","./assests/images/crystalTwo.jpg", "./assests/images/crystalThree.jpg", "./assests/images/crystalOne.jpg"];

$('#target').text(random);
$('#wins').text(wins);
$('#losses').text(losses);

// How to dynamically create crystals, based on the amount of images in your array.
function generateCrystals (){
	for (var i = 0; i < images.length; i++) {
		var crystal = $('<img>');
		crystal.attr('src', images[i]);
		crystal.attr('data-crystal-value', Math.floor(Math.random() * 12 + 1));
		crystal.addClass('crystal');
		$('#content').append(crystal);
	}
}

generateCrystals();

$(document).on('click', '.crystal', function (){
	var crystalValue = parseInt($('.crystal').attr('data-crystal-value'));
	totalScore += crystalValue;
	$('#totalScore').text(totalScore);
	if (totalScore === random) {
		wins++;
	}
	else if (totalScore > random) {
		losses++;
	}
});