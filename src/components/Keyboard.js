import { useEffect, useState } from "react";
import { keyboard, MAX_GUESSES, ANIMATION_INTERVAL } from "../constants";
import { formatWord, getKeyClass } from "../helpers";

export default function Keyboard({
  hasReachedMax,
  word,
  guesses,
  setCurGuess,
  handleSubmit
}) {
  const [usedKeys, setUsedKeys] = useState(null);

  useEffect(() => {
    let timer = setTimeout(() => {
      let _usedKeys = {
        correct: [],
        close: [],
        wrong: []
      };

      guesses.forEach((guess) => {
        for (let i = 0; i < guess.length; i++) {
          let key = "";
          if (guess[i] === word[i]) {
            key = "correct";
          } else if (word.indexOf(guess[i]) !== -1) {
            key = "close";
          } else {
            key = "wrong";
          }
          _usedKeys[key].push(guess[i]);
        }
      });

      setUsedKeys(_usedKeys);
    }, ANIMATION_INTERVAL * MAX_GUESSES);

    return () => clearTimeout(timer);
  }, [word, guesses]);

  const handleKeyPress = (letter) => {
    if (hasReachedMax) return;
    if (letter === "enter") {
      handleSubmit();
      return;
    }
    setCurGuess((prev) => formatWord(prev, letter));
  };

  const keyboardRows = keyboard.map((row, index) => {
    return (
      <div key={index} className="keyboard__row">
        {row.map((letter) => (
          <div
            key={letter}
            className={`keyboard__key ${
              letter === "back" || letter === "enter"
                ? "keyboard__key--flex"
                : ""
            }`}
          >
            <button
              className={`keyboard__button ${getKeyClass(letter, usedKeys)}`}
              onClick={() => handleKeyPress(letter)}
            >
              {letter}
            </button>
          </div>
        ))}
      </div>
    );
  });

  return <div className="keyboard">{keyboardRows}</div>;
}
