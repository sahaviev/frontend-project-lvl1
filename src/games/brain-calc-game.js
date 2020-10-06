import { getRandomNumber, getRandomElement } from '../utils.js';
import { engine } from './engine.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

const Operation = {
  PLUS: '+',
  MINUS: '-',
  MULTIPLICATION: '*',
};

const operations = [
  Operation.PLUS,
  Operation.MINUS,
  Operation.MULTIPLICATION,
];

const MathFunctions = {
  [Operation.PLUS](x, y) { return x + y; },
  [Operation.MINUS](x, y) { return x - y; },
  [Operation.MULTIPLICATION](x, y) { return x * y; },
};

function getQuestion() {
  const number1 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const number2 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const operation = getRandomElement(operations);
  const answer = MathFunctions[operation](number1, number2);
  const question = `${number1} ${operation} ${number2}`;
  return {
    question, answer,
  };
}

// eslint-disable-next-line import/prefer-default-export
export async function brainCalcGame() {
  await engine('What is the result of the expression?', getQuestion);
}
