import React from "react";


function HiddenWord(props) {

  // assign the word to guess to the props
  const { wordToGuess } = props;

  // create a function to render the mystery word 
  function renderHiddenWord() {

    // split the word into a mystery word array, and assign to variable
    const mysteryWordArray = wordToGuess.split("")

    return (
      // map the mysterywordArray putting each letter into a new span element 
      mysteryWordArray.map((letter, index) => (
      <span key={index} >{letter}{" "}</span>
    ))
  );
}
  // return renderhiddenword in a div
  return <div className="HiddenWord">{renderHiddenWord()}</div>;
  
}

// export the component 
export default HiddenWord;
