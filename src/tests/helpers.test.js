import { getOutcome, formatWord } from "../helpers";

test("Show a correct guess", () => {
  let guesses = ["apple"];
  let correctWord = "apple";
  expect(getOutcome(guesses, correctWord)).toBe("You won!");
});

test("Show wrong guesses", () => {
  let guesses = ["apple", "chalk", "coach", "blank", "brick"];
  let correctWord = "award";
  let shouldBe = `You Lost! The word was ${correctWord}`;
  expect(getOutcome(guesses, correctWord)).toBe(shouldBe);
});

test("Keyboard: handle backspace", () => {
  expect(formatWord("apple", "back")).toBe("appl");
});

test("Keyboard: handle new letter", () => {
  expect(formatWord("appl", "e")).toBe("apple");
});

test("Keyboard: handle more than 5 letters", () => {
  expect(formatWord("apple", "e")).toBe("apple");
});

test("Keyboard: handle enter", () => {
  expect(formatWord("applepie", "b")).toBe("apple");
});
