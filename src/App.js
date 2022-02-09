import { useEffect, useMemo, useState } from "react";

import { MAX_GUESSES, ANIMATION_INTERVAL } from "./constants";
import allGuessWords from "./data/allGuessWords";
import { getOutcome, getRandomWord } from "./helpers";

import Keyboard from "./components/Keyboard";
import Board from "./components/Board";
import Modal from "./components/Modal";

import "./styles.scss";

const GUESS_WORD = getRandomWord(allGuessWords);

export default function App() {
  const [guesses, setGuesses] = useState([]);
  const [curGuess, setCurGuess] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const outcome = useMemo(() => getOutcome(guesses, GUESS_WORD), [guesses]);

  useEffect(() => {
    if (outcome) {
      setTimeout(() => {
        setOpenModal(true);
      }, ANIMATION_INTERVAL * MAX_GUESSES);
    }
  }, [outcome]);

  const handleSubmit = () => {
    if (curGuess.length !== 5) return;

    if (curGuess === GUESS_WORD) {
      setGuesses((prev) => [...prev, curGuess]);
      setCurGuess("");
      return;
    }

    import(`./data/allWords/${curGuess[0]}`)
      .then((words) => {
        if (words.default.find((word) => word === curGuess.toUpperCase())) {
          setGuesses((prev) => [...prev, curGuess]);
          setCurGuess("");
        } else {
          setOpenModal(true);
        }
      })
      .catch((e) => {
        console.log("NOT A FILE");
      });
  };

  const modal = openModal ? (
    <Modal
      type={outcome ? "modal" : "alert"}
      text={outcome || "Not in word list"}
      close={() => setOpenModal(false)}
      autoClose={!outcome}
    />
  ) : null;

  return (
    <div className="App">
      {modal}
      <Board
        hasReachedMax={guesses.length >= MAX_GUESSES || outcome}
        word={GUESS_WORD}
        guesses={guesses}
        curGuess={curGuess}
      />
      <Keyboard
        hasReachedMax={guesses.length >= MAX_GUESSES}
        word={GUESS_WORD}
        guesses={guesses}
        setCurGuess={setCurGuess}
        handleSubmit={() => handleSubmit()}
      />
    </div>
  );
}
