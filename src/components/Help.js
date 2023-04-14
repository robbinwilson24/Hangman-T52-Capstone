import React from "react";
import { useState } from "react";


// create a function that will display the game rules when the help button is clicked 
function HelpButton() {


    // set the state of the rules visibility to false 
    const [isHangmanRulesVisible, setIsHangmanRulesVisible] = useState(false);

    return(
        <div id="help-button-div">
            {/* // set an onclick to change the state oof the rules  */}
            <button id="help-button" type="button" onClick={() => setIsHangmanRulesVisible(!isHangmanRulesVisible)}>Help</button>

            {/* // set the display of the rules div to switch between block and none when the rules button is clicked  */}
            <div id="hangmanRules" style={{ display: isHangmanRulesVisible ? "block" : "none" }}>
                <h3>How to play hangman</h3>
                <p>Hangman is a simple word guessing game where you try to figure out an unknown word by guessing letters. 
                    If too many letters which do not appear in the word are guessed, the player is hanged (and loses).</p>
                <h4>To Start</h4>
                <p> A random word will be selected by the game. Each letter in the word is initially hidden. 
                    The letters will reveal themselves as you select correct letters. 
                    Start guessing letters by selecting letters on the onscreen keyboard.</p>
                <p id="hintP"><span id="hintSpan">Hint: </span>Try starting by guessing common letters like vowels, or "s," "t," and "n." </p>
                <p>For every incorrect guess made, another section will be added to the stick figure until it is completely hanged. 
                   You will have 10 incorrect guesses before the game ends.</p>
                <h4>Game Over</h4>
                <p>If you have made 10 incorrect guesses and still have not completed the word, then the stick figure is hanged and the game ends.</p>
                <h4>Winner</h4>
                <p>Should you guess all of the letters correctly to reveal the mystery word before you run out of guesses then the stick figure survives and you have won the game!</p>

                {/* // add a button that will hide the rules when clicked by chanGing the state  */}
                <button type="button" id="rulesThanks"
                onClick={() => setIsHangmanRulesVisible(!isHangmanRulesVisible)}>Okay. Thanks!</button>
            </div>
        </div>
    )
}

// export the help button
export default HelpButton;