import React from "react";

// a function to update the game status , providing the user with messages that update during the game 
// and ultimately tell them whether they have won or lost the game. 
function GameStatus(props) {

  // assign the relevant states to props
  const { wrongGuesses, maxWrongGuesses, hiddenWord, word, totalGuesses } = props

  function renderGameStatus() {

    // if the hidden word joined after each of the correct letters have been revealed then a winnig message appears
    if ((hiddenWord.join("") === word) && (totalGuesses > 0)) {
      return (
        // assign an id to change the appearance of the winning message
        <div id="winning-message">
          <h2>Hang on!!</h2>
          <h3>You have only gone and won it!</h3>
          <h2>Congratulations!</h2>
          <h4>* Hang glides outta there</h4>
        </div>
      );

      // if the number of wrong guesses equals the max number of guesses then the game over message is shown 
    } else if (wrongGuesses === maxWrongGuesses) {
      return (
      // assign an id to change the appearance of the losing message
        <div id="losing-message">
          <h2>Game over. </h2>
          <h3>The word was:</h3>
          <h1> "{word}"</h1>
        </div>
      );
      // display a ready to play message if the player hasnt started yet
    } else if (totalGuesses === 0) {
      return (
        <h2>Ready to Play?</h2>
        );

        // a few other random messages that apepar depending on how many guesses the player has had 
    } else if ((totalGuesses === 1) || (wrongGuesses > 0 && wrongGuesses <= 1) || (totalGuesses > 1 && wrongGuesses === 0)){
      return (
        <h2>Let's go! You've got this!</h2>
      );


    } else if (wrongGuesses === 2) {
      return (
        <h2>No need to hang your head, you'll get it next time!</h2>
      );

    } else if (wrongGuesses >= 3 && wrongGuesses <= 4) {
      return (
        <div>
          <h2>You still have time!</h2>
          <h3>Don't get hung up on the wrong answer!</h3>
        </div>
      );

    } else if (wrongGuesses >= 5 && wrongGuesses <= 6) {
      return (
        <div>
          <h2>Oh dear!</h2>
          <h3>Don't let that wrong letter make you feel hung out to dry!</h3>
        </div>
      );

    } else if (wrongGuesses >= 7 && wrongGuesses <= 8) {
      return (
        <div>
          <h2>Come on! Hang in there!</h2>
          <h5>Forgive the pun!</h5>
        </div>
      );

    } else if (wrongGuesses === 9) {
      return (
        <div>
          <h2>You're hanging on by a thread!</h2>
          <h4>1 wrong guess remaining</h4>
        </div>
      );

    }
  }

  return (
    <div id="inner-game-status">
      {renderGameStatus()}
    </div>
  );
}




export default GameStatus;


