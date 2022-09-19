import React from "react";

function HangmanInfo() {
  return (
    <div>
      <text>
        This is a Python script I made that simulates the classic game of
        Hangman!
        <br />
        When this script is run well, execute the following.
        <br />
        1-The script scouts through a .txt file that contains a list of words.
        <br />
        2-It randomly selects a word.
        <br />
        3-Then iterates through each letter on the sting and counts the number.
        <br />
        4-On the console, the user will see blank spaces corresponding to each
        letter and an input that asks them to enter a letter to find if it is on
        the word.
        <br />
        5-When the input is entered, the script corroborates that the user only
        enters letters; if not, it will raise an error and ask to enter only one
        letter. Each time an input is entered, the terminal screen will clear.{" "}
        <br />
        6-If the entered letter is on the word, that letter will replace the
        blank space and appear in its corresponding position.
        <br />
        7-This will continue until all letters have been discovered.
        <br />
        8-When the word is completed, a congratulatory message will appear,
        naming the secret word.
        <br />
        9-Script will end.
        <br />
        <a href="https://deepnote.com/@medector-6e6f/Hangman-be62392e-1c67-4ca5-b8c0-e9d56d069c15">
          See Script
        </a>
      </text>
    </div>
  );
}

export default HangmanInfo;
