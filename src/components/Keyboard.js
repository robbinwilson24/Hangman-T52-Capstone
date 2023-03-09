import React from "react";


// function that generates the keboard that is displayed on screen 
function Keyboard(props) {

  // assign handle guess and guessed letters to props 
  const { handleGuess, guessedLetters } = props;

  // create a variable contianing each letter of the alphabet to be split into an array 
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

 // split the alphabet into an array and assign to a variable 
  const alphabetArray = alphabet.split("");

  // map over the alphabetArray to assign each letter of the alphabet to a button
  const letterButtons = alphabetArray.map((letter) => {

    // a boolean variable to check if the letter of the button clicked is in the array of previously guessed letters, 
    // This will allow the relevant button to be disabled if the letter has been selected before
    const isDisabled = guessedLetters.includes(letter);

    return (
      <button
        key={letter}
        className="letterButton"
        onClick={() => handleGuess(letter)}
        disabled={isDisabled}
      >
        {letter}
      </button>
    );
  });

  // return the final keyboard in a div
  return <div className="keyboardContainer">{letterButtons}</div>;
}

export default Keyboard;





