function getRandomWord(allGuessWords) {
  let randIndex = Math.floor(Math.random() * allGuessWords.length) + 1;
  return allGuessWords[randIndex].toLowerCase();
}

function getOutcome(guesses, word) {
  if (guesses[guesses.length - 1] === word) return "You won!";
  if (guesses.length === 5) return `You Lost! The word was ${word}`;
  return false;
}

function formatWord(word, letter) {
  if (letter === "back") return word.length > 0 ? word.slice(0, -1) : "";
  if (word.length >= 5) return word.substring(0, 5);

  return word + letter;
}

function getKeyClass(letter, usedKeys) {
  if (usedKeys === null) return "";

  let keyClass = "";
  if (usedKeys.correct.indexOf(letter) !== -1) {
    // Correct letter, Correct Place
    keyClass = "correct";
  } else if (usedKeys.close.indexOf(letter) !== -1) {
    // Correct letter, Wrong Place
    keyClass = "close";
  } else if (usedKeys.wrong.indexOf(letter) !== -1) {
    // Wrong letter, Wrong Place
    keyClass = "wrong";
  }

  return `keyboard__button--${keyClass}`;
}

function getBoardSquareType(word, guess, letter, index, isCurrent) {
  // If current guess word
  if (isCurrent) return "open";

  // If the letter is in the word and correct place
  if (word[index] === letter) return "correct";

  // If the letter is in the word but wrong place
  if (word.indexOf(letter) !== -1) {
    if (guess.split(letter).length === word.split(letter).length) {
      return "close";
    } else {
      // Check for any occurences of the letter in the word
      let i = 0;
      let array = [];
      while (i < guess.length) {
        if (guess[i] === letter) {
          array.push(i);
        }
        i++;
      }

      if (guess.split(letter).length > word.split(letter).length) {
        // Check for multiple occurences of the same letter
        let correctIndex = word.indexOf(letter);
        if (array.indexOf(correctIndex) === -1 && array[0] === index) {
          return "close";
        }
      } else if (array[0] === index) {
        return "close";
      }
    }
  }

  return "wrong";
}

export {
  getRandomWord,
  getOutcome,
  formatWord,
  getKeyClass,
  getBoardSquareType
};
