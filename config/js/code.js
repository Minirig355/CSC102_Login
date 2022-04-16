var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-|| FUNCTION: BLAST OFF TIMER ||+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+

function blastOffTimer(){
    console.log("blastOffTimer() started");
    var currTime = 50;
    document.getElementById("blastOffText").innerHTML = currTime;
    console.log("50");
    currTime = currTime - 5;

    let myTimer = setInterval(blastOffCountdown, 5000);

    function blastOffCountdown(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
        if (currTime == -5){
            document.getElementById("blastOffText").innerHTML = "Blastoff!";
            document.getElementById("blastOffPic").style.display="block";
            console.log("Blast off!")
            clearInterval(myTimer)
        }
    }
}

//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-|| FUNCTION: PLAY CRAPS ||--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+

// Setting variables
var numWin = 0;                                                                                         // |\
var numLoss = 0;                                                                                        // | \
var numTie = 0;                                                                                         // |  Setting Variables.
var rig = 0;                                                                                            // | /
var numWinHid = 0;                                                                                      // |/
                                                                                                        //-----------------------------------------------------------------------------------------------------------------
function playCraps(){                                                                                   // Defining the function that's associated with the button on the .html file.
    if(numLoss >= 30){                                                                                  // If numLoss >= 30 then execute this codeblock.
        document.getElementById("crapsRes").innerHTML = "You're not a very good gambler... Take a break"; // A message for those gamblers who just can't help but accrue debt!
        document.getElementById("gambleButton").disabled = true;                                        // Actually disable the button the play to prevent any temptation!
        console.log("Sorry! Better luck next time, take a break :)")                                    // A message in console wishing the gambler luck in their next attempt a later day.
    } else if(numWinHid >= 8) {                                                                         // If numWin >= 8 then rig the game so the user can no longer win (User will eventually hit loss limit if they haven't by now)
        rig += 1                                                                                        // The actual rigging. It's done by simply setting a variable to detect if rigging is required.
        numWinHid -= 1                                                                                  // This variable exists so I can track the wins with a method other than numWin variable which is used to update elements.
    } else {                                                                                            // If the gambler hasn't lost 30 times, go ahead and play craps!
    console.log("Craps game started");                                                                  // Simple console output.
    var die1 = Math.ceil(6 * Math.random());                                                            // Determine a random number between 1-6 for the first die.
    var die2 = Math.ceil(6 * Math.random());                                                            // Determine a random number between 1-6 for the second die.
    var sum = die1 + die2;                                                                              // Adding up the sum of the two die that will later be compared to determine a loss.
    document.getElementById("die1Res").innerHTML = die1;                                                // Updating the results of the first die to display on the webpage
    document.getElementById("die2Res").innerHTML = die2;                                                // Updating the results of the second die to display on the webpage
    document.getElementById("sumRes").innerHTML = sum;                                                  // Updating the results of the sum of both die to display on the webpage
                                                                                                        //-----------------------------------------------------------------------------------------------------------------
    console.log("The first die is: " + die1)                                                            // Output the value of the first die to the console
    console.log("The second die is: " + die2)                                                           // Output the value of the second die to the console
    console.log("The sum is: " + sum)                                                                   // Output the value of the sum to the console
                                                                                                        //-----------------------------------------------------------------------------------------------------------------
    if(sum == 7|| sum == 11){                                                                           // An if statement checking the variable 'sum' to see if it equals (==) 7 or (||) 11, which would mean you lost
        document.getElementById("crapsRes").innerHTML = "Craps, you lose.";                             // If the if statement is true, set the element "crapsRes" to say "Craps, you lose." on the web page
        numLoss += 1;                                                                                   // Add one (+= 1) to the variable that tracks losses.
        console.log("%cCraps, you lose.", "color:red; font-size: 50; -webkit-text-stroke: 1px black")   // Some cheeky formatting for a fancy 'You lost' message in the console.
    } else if(die1 == die2 && die1 % 2 == 0 && rig == 0){                                               // Another if statement, using elseif to keep the process linear, meaning it can't become true without the previous statement being false. Only statements that the sum != 7 || 11 reach this point
        document.getElementById("crapsRes").innerHTML = "You win!";                                     // If the elseif statement is true, set the element "crapsRes" to say "You win!" on the web page
        numWin += 1;                                                                                    // Add one (+= 1) to the variable that tracks wins.
        numWinHid += 1;                                                                                 // The secondary variable to track wins, once this hits the 'rig' limit, it will increment down by one then never be able to win again.
        console.log("%cY%cO%cU %cW%cI%cN!", "color:red", "color:orange", "color:yellow", "color:green", "color:blue", "color:purple")   // Some cheeky formatting for a fancy 'You win!' message in the console.
    } else if(die1 == die2 && die1 % 2 == 0 && rig == 1){                                               // If you win and the rig setting is enabled, use this statement
        var die1 = Math.ceil(3 * Math.random());                                                        // Reroll the first die, this time only between 1-3
        var die2 = Math.ceil(3 * Math.random() + 3);                                                    // Reroll the second die, this time only between 3-6
        var sum = die1 + die2;                                                                          // Redetermine the sum of the die
        document.getElementById("die1Res").innerHTML = die1;                                            // Updating the results of the first die to display on the webpage
        document.getElementById("die2Res").innerHTML = die2;                                            // Updating the results of the second die to display on the webpage
        document.getElementById("sumRes").innerHTML = sum;                                              // Updating the results of the sum of both die to display on the webpage
    } else {                                                                                            // Just an else statement, not relying on any conditional comparisons, but instead being the default outcome if neither of the previous two if statements return true
        document.getElementById("crapsRes").innerHTML = "Tie, please try again.";                       // If neither of the previous if statements are true, set the eleement "crapsRes" to say "Tie, please try again." on the webpage
        numTie += 1;                                                                                    // Add one (+= 1) to the variable that tracks ties.
        console.log("Tie!")                                                                             // A boring 'Tie' console output for a lackluster result.
    }                                                                                                   //-----------------------------------------------------------------------------------------------------------------
    document.getElementById("wins").innerHTML = numWin                                                  // Update wins tracker on webpage.
    document.getElementById("losses").innerHTML = numLoss                                               // Update losses tracker on webpage.
    document.getElementById("ties").innerHTML = numTie                                                  // Update ties tracker on webpage.
    }
}

//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-|| FUNCTION: CLOCK ||-+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+

window.onload = function clockLoop() {                                                                  // An onload event in order to load the clock function with the page
    let clockTimer = setInterval(clockDisplay, 1000);                                                   // Establishing the loop to allow for updates every second
                                                                                                        //
    function clockDisplay() {                                                                           // The function itself
        var clockTime = new Date();                                                                     // Establishing the base function
        var clockHours = clockTime.getHours();                                                          // Grabbing the hours from the machine
        var clockHoursUTC = clockTime.getUTCHours();                                                    // Grabbing UTC hours
        var clockMinutes = clockTime.getMinutes();                                                      // Grabbing minutes
        var clockSeconds = clockTime.getSeconds();                                                      // Grabbing seconds
                                                                                                        //
        clockMinutes = (clockMinutes > 10 ? "0" : "") + clockMinutes;                                   // Using a comparison w/ a ternary operator to add a "0" to the beginning of the minutes number if it's less than 10
        clockSeconds = (clockSeconds < 10 ? "0" : "") + clockSeconds;                                   // line 106 (below) formats the string in such a way that only one update is required to display the time
                                                                                                        //
        var clockTimeFull = "Local time: " + clockHours + ":" + clockMinutes + ":" + clockSeconds + "<br>" + "UTC time: " + clockHoursUTC + ":" + clockMinutes + ":" + clockSeconds;
        document.getElementById("clock").innerHTML = clockTimeFull;                                     // Updating the webpage
    }
}
