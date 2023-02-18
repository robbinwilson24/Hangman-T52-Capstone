# Hangman-T52-Capstone

## Program Description

This is a simple hangman game that I have coded using React.js and CSS. 

The program fetches a random word from an API, and hides each of the letters. 

The player selects letters via an onscreen keyboard, as the player guesses correct letters, the corresponding letters are revealed, and if the palyer selects incorrect letters , the image in the game changes and shows the stick figure getting one step closer to being a hanged man. 

The game ends once the palyer has correctly guessed the word or has run out of guesses. 



## How to play the game / Rules

Hangman is a simple word guessing game where you try to figure out an unknown word by guessing letters.
If too many letters which do not appear in the word are guessed, the player is hanged (and loses).

To Start:
- A random word will be selected by the game. Each letter in the word is initially hidden. 
- The letters will reveal themselves as you select correct letters.
- Start guessing letters by selecting letters on the onscreen keyboard.
- For every incorrect guess made, another section will be added to the stick figure until it is completely hanged. 
- You will have 10 incorrect guesses before the game ends.

Game over:
- If you have made 10 incorrect guesses and still have not completed the word, then the stick figure is hanged and the game ends.

Winner:
- Should you guess all of the letters correctly to reveal the mystery word before you run out of guesses then the stick figure survives and you have won the game!

## How to Install

To install and run the Hangman game on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the folder that contains the 'package' and 'package-lock' files. 
![image](https://user-images.githubusercontent.com/123034061/219879403-20277391-75de-4a12-b50a-04eb9baae6ff.png)

3. In the file root path bar ( above the folders ) , Type in CMD to open command prompt:
![image](https://user-images.githubusercontent.com/123034061/219879611-b9d689f4-0fba-47f6-a150-2818526d0640.png)

4. Once in the command line, install the required dependencies by running the following  "npm install"
 ![image](https://user-images.githubusercontent.com/123034061/219879709-10a94190-1a8f-4cee-a85a-6a16a2ece523.png)

5. Once this has finished installing, you can start the game by running the following "npm start".
6. This will usually automatically a web browser and launch the program. However you can open it yourself if you go to "http://localhost:3000" in a browser. 


