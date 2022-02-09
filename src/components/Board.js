import { useEffect, useState } from "react";
import { MAX_GUESSES, ANIMATION_INTERVAL } from "../constants";
import BoardSquare from "./BoardSquare";

function BoardRow({ word = "", guess = "", isCurrent = true }) {
  const [animateIndex, setAnimateIndex] = useState(1);

  useEffect(() => {
    if (!isCurrent) {
      animateColorChange();
    }
  }, [guess, isCurrent]);

  // Animate color change of new guesses
  const animateColorChange = () => {
    let i = 1;
    let interval = setInterval(() => {
      ++i;
      setAnimateIndex(i);
      if (i === MAX_GUESSES) clearInterval(interval);
    }, ANIMATION_INTERVAL);
  };

  let row = [];

  if (guess.length > 0) {
    guess.split("").forEach((letter, index) => {
      let isAnimate = animateIndex <= index;

      row.push(
        <BoardSquare
          key={`guess-square-${index}`}
          {...{ word, guess, letter, index, isCurrent, isAnimate }}
        />
      );
    });
  }

  if (guess.length < MAX_GUESSES) {
    for (let i = 0; i < MAX_GUESSES - guess.length; i++) {
      row.push(<BoardSquare key={`empty-square-${i}`} isCurrent={true} />);
    }
  }

  return row;
}

export default function Board({ hasReachedMax, word, guesses, curGuess }) {
  // Rows of past guesses
  let boardRows =
    guesses.length > 0
      ? guesses.map((guess, index) => (
          <BoardRow
            key={`row-${index}`}
            word={word}
            guess={guess}
            isCurrent={false}
          />
        ))
      : [];

  // Row of current guess
  if (!hasReachedMax) {
    boardRows.push(
      <BoardRow key={`row-${guesses.length}`} word={word} guess={curGuess} />
    );
  }

  // Rows of future guesses
  if (guesses.length < MAX_GUESSES) {
    let start = hasReachedMax ? 0 : 1;
    for (var i = start; i < MAX_GUESSES - guesses.length; i++) {
      boardRows.push(<BoardRow key={`empty-row-${i}`} />);
    }
  }

  return <div className="board">{boardRows}</div>;
}
