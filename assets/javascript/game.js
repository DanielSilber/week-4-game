$(document).ready(function () {

    //Variables

    var crystal1Value;
    var crystal2Value;
    var crystal5Value;
    var crystal6Value;
    var wins;
    var losses;
    var count;
    var matchNumber;

    function gameStart() {
        matchNumber = 19 + Math.floor(Math.random() * 120);
    // generating a random value from 1-12 for each crystal
        crystal1Value = 1 + Math.floor(Math.random() * 12);
        crystal2Value = 1 + Math.floor(Math.random() * 12);
        crystal5Value = 1 + Math.floor(Math.random() * 12);
        crystal6Value = 1 + Math.floor(Math.random() * 12);
    // 
        count = 0;
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
        $("#matchNumber").html(matchNumber);
        $("#count").html(count);
        console.LogVariables();

    }

    function result() {
        if (count > matchNumber) {
            losses++;
            console.log("lost")
            gameStart();
        }

        if (count == matchNumber) {
            wins++;
            console.log("win")
            gameStart();
        }
    }

    gameStart();

    $(".crystals").on("click", function () {
        var click = $(this).attr("value");
        console.log(click);

        //wasnt accepting the else if statements on a format level

        //if (click == "crystal1") {
        //count += crystal1Value;
       // } else if (click == "crystal2"); {
        //count += crystal2Value;
        
        //} else if (click == "crystal5"); {
            //count += crystal5Value;
        //} else if (click == "crystal6"); {
        //count += crystal6Value; 
        
    }









