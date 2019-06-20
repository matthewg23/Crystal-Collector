
$(document).ready(function() {

    var counter = 0; // variable to keep track of user score
    var target = Math.floor(Math.random() * 120) + 20; // random number between 20-120
    var wins = 0;
    var losses = 0;
    

    
    $('.target').text("Target: " + target);
    $('.score').text("User score: " + counter);

    for (var i = 1; i < 5; i++) {
    var randomNum = Math.floor(Math.random() * 12) + 1;
    $("#crystal-" + i).attr('data-crystalvalue', randomNum);
    };

    $('.crystal').on('click', function() {
    var crystalValue = parseInt($(this).attr("data-crystalvalue"));
    counter += crystalValue // counter = counter + crystalValue;
    $('.score').text("User score: " + counter);

    if (counter === target) {
            wins++;
            $('.wins').text("Wins: " + wins);
            gameReset();
        }
    if (counter > target) {
        losses++;
        $('.losses').text("Losses: " + losses);
        gameReset();
    }});

    function gameReset () {
        target = Math.floor(Math.random() * 120) + 20;
        $('.target').text("Target: " + target);
        counter = 0;
        $('.score').text("User score: " + counter);
        for (var i = 1; i < 5; i++) {
            var randomNum = Math.floor(Math.random() * 12) + 1;
            $("#crystal-" + i).attr('data-crystalvalue', randomNum);
            };
    }

    


// Four img with crystal, link, Each crystal needs to have a random number generated from it 
// Immerse yourself to learn new things 
// Focus on coding at least 40 mins a day and typing 10 min a day
// Baby steps
// 




// I have to put my head in the game!
// Four image tags with links to each crystal
// Document start: Calls the Game Setup Function
// Game set up: Images are assigned a random value, total result # set from 19-100. 
// Clicking a crystal calls the Function: Update Page Function
// Update page updates the value of the Total # of each crystal. 
// if result = crystalguesses... wins++ and calls Game Reset Function 
// if crystal guesses > result... losses++ and calls Game Reset Function
});