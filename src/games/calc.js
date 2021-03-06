/* eslint-disable func-names */
import { getRandomNumber, getRandomElement } from '../utils.js';
import { engine } from '../engine.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;
const GAME_TITLE = 'What is the result of the expression?';

const MathFunctions = {
  '+': function (x, y) { return x + y; },
  '-': function (x, y) { return x - y; },
  '*': function (x, y) { return x * y; },
};

function getQuestionAndAnswer() {
  const number1 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const number2 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const operation = getRandomElement(Object.keys(MathFunctions));
  const answer = MathFunctions[operation](number1, number2).toString();
  const question = `${number1} ${operation} ${number2}`;
  return {
    question, answer,
  };
}

export async function calc() {
  await engine(GAME_TITLE, getQuestionAndAnswer);
}
