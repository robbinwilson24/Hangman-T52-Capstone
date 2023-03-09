import React, { useState, useEffect } from "react";
import Keyboard from "./Keyboard";
import HiddenWord from "./HiddenWord";
import WrongGuesses from "./WrongGuesses";
import GameStatus from "./GameStatus";


// import each of my images
import Image1 from "../assets/hangman-state-1.gif"
import Image2 from "../assets/hangman-state-2.gif"
import Image3 from "../assets/hangman-state-3.gif"
import Image4 from "../assets/hangman-state-4.gif"
import Image5 from "../assets/hangman-state-5.gif"
import Image6 from "../assets/hangman-state-6.gif"
import Image7 from "../assets/hangman-state-7.gif"
import Image8 from "../assets/hangman-state-8.gif"
import Image9 from "../assets/hangman-state-9.gif"
import Image10 from "../assets/hangman-state-10.gif"
import Image11 from "../assets/hangman-state-11.gif"

// put all images in an array that will be used to render the image on screen 
const imageArray = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11]


function Hangman() {
  // create the state for the word that will be fetched from the API URL
  const [word, setWord] = useState("");

  // create the state fr wrong guesses made by user
  const [wrongGuesses, setWrongGuesses] = useState(0);

  // create the state for the hidden word array
  const [hiddenWord, setHiddenWord] = useState([]);

  // create the state for the guessed letters array 
  const [guessedLetters, setGuessedLetters] = useState([]);

  // set a variabel for the max number of wrong guesses allowed 
  const maxWrongGuesses = 10;

  // set a variable for the total number of guesses made (incorrect and correct)
  const [totalGuesses, setTotalGuesses] = useState(0);

  // set the states for if the game is won or lost, to change to true at the relevant outcome
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameLost, setIsGameLost] = useState(false);


  useEffect(() => {

    // use a fetch to get a random word from the API URL, 
    // then loop through each letter in the hidden word and push a "_" to the hidden word array and set its state
    fetch("https://random-word-api.herokuapp.com/word")
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0]);
        const hiddenWord = [];
        for (let i = 0; i < data[0].length; i++) {
          hiddenWord.push("_");
        }
        setHiddenWord(hiddenWord);
      })
      .catch((error) => console.error(error));
  }, []);

function handleGuess(letter) {

  setTotalGuesses(totalGuesses + 1);

    // Update state for guessed letters, hidden word array, and the number of wrong guesses
  if (isGameWon || isGameLost) {
    return; 
  }
  
  // update the guessed letters state array with any incorrect letters that have been guessed 
    setGuessedLetters([...guessedLetters, letter]);
  if (!word.includes(letter)) {
    setWrongGuesses(wrongGuesses + 1);

    // conditional to set the game as lost when number of wrong guesses hits maxWrongGuesses (10)
    if (wrongGuesses + 1 === maxWrongGuesses) {
      setIsGameLost(true); 
    }

    
  } else {
    // a variable for the new hidden word, that loops through the original word, and if a guessed letter is in the word it replaces the relevant "_" with the correct letter 
    const newHiddenWord = [...hiddenWord];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        newHiddenWord[i] = letter;
      }
    }
  
    // Set the state of the game as won if the hidden word array matches the random word
    setHiddenWord(newHiddenWord);
     if (newHiddenWord.join("") === word) {
      setIsGameWon(true); 
    }
  }
}

// Set a variable for the joined hidden word
  const joinedWord = hiddenWord.join("")

  return (
    <div>
      {/* // create a container div for the "top row" items */}
      <div id="stats-image-container">

          {/* // Wrong guesses component with max guesses and wrong guesses passed as props  */}
          <WrongGuesses className="wrong-guesses" maxWrongGuesses={maxWrongGuesses} wrongGuesses={wrongGuesses}/>

          {/* the image to be displayed with the souce being pulled from the index number of the images array, the index number updates with the state of "wrongGuesses"  */}
          <img className="ImagesHM" src={imageArray[wrongGuesses]}/>

          {/* // The game status component that takes the hiddenword, word, wrongguesses and maximum guesses set as props */}
          <GameStatus className="game-status" wrongGuesses={wrongGuesses} maxWrongGuesses={maxWrongGuesses} hiddenWord={hiddenWord} word={word} totalGuesses={totalGuesses}/>
      </div>
      
      {/* // Hidden word component with the joinedword passed as a prop */}
      <HiddenWord wordToGuess={joinedWord} />

      {/* // Keyboard component with the handleguess fucntion and guessed letters passed as props */}
      <Keyboard handleGuess={handleGuess} guessedLetters={guessedLetters} />

</div>
);
}

export default Hangman;


