// import useState from react , the necessary components and the style sheets. 
import { useState } from "react";
import HelpButton from "./components/Help";
import ResetGame from "./components/Reset";
import Hangman from "./components/HangmanMain";
import "./styles/hangmanStyles.css";
import "./styles/keyboardStyles.css";

function App() {

  // create the state of the game to allow me to reset it when i click the reset button 
  // i initially tried several ways of trying to get this to work with react router 
  // or just resetting the main hangman state values , but i kept coming up short - after a few days i tried the below approach and it worked. 
  const [resetGame, setResetGame] = useState(false);

  // a function to handle the game resetting 
  function handleResetGame() {
    // when the fucntion is called, the reset game state is set to true, 
    setResetGame(true);
    // set time out to restore the state to false , so that the button can be clicked again. 
    setTimeout(() => {
      setResetGame(false);
    }, 0);
  };

  return (
    <div className="App">
      <div id="topRowMenu">
        <ResetGame handleReset={handleResetGame} />
        <h1 id="mainHeading">- H A N G M A N -</h1>
        <HelpButton />
      </div>

      {/* // a conditional render for the hangman component , based on the state of the resetgame . 
      // if resetgame is true then render Hangman with a key of 1, and if false reuse the existing hangman component  */}
      {resetGame ? <Hangman key={1} /> : <Hangman />}
    </div>
  );
}

export default App;

/*
References: 

- looking up the rules of hangman 
  - https://www.hangmanwords.com/how-to
  - https://www.wikihow.com/Play-Hangman

- Looking into sharting state between components 
  - https://beta.reactjs.org/learn/sharing-state-between-components
  - https://www.twilio.com/blog/synchronized-state-variables-react-twilio-sync

- I read up on how to disable a button 
  - https://timmousk.com/blog/react-button-disable/
  - https://www.grepper.com/answers/415841/how+to+disable+a+button+in+react+based+on+condition

- I looked up how to get items to pulse in css, and found out about keyframes
  - https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
  - https://www.florin-pop.com/blog/2019/03/css-pulse-effect/

  - I read up how to update arrays in state
    - https://beta.reactjs.org/learn/updating-arrays-in-state

- I read up on conditional rendering:
  - https://thisdotcode.com/conditional-rendering-lists-and-keys-in-reactjs

*/
