import React from "react";

// create a fucntion that will handle the reset when the reset button is clicked on the main screen 
function ResetGame({ handleReset }) {
    return (
      <button id="reset-button" onClick={handleReset}>Reset</button>
    );
  }

// export the function 
  export default ResetGame;