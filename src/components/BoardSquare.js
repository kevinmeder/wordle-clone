import { getBoardSquareType } from "../helpers";

export default function BoardSquare({
  word,
  guess,
  letter,
  index,
  isCurrent,
  isAnimate
}) {
  let type =
    letter && (isCurrent || isAnimate)
      ? "current"
      : getBoardSquareType(word, guess, letter, index, isCurrent);

  let displayLetter = letter ? <div className="inner">{letter}</div> : null;

  return (
    <div className={`board__col board__col--${type}`}>{displayLetter}</div>
  );
}
