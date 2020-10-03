import promptly from 'promptly';
import { getRandomNumber, getRandomElement } from '../utils.js';
import { engine } from './engine';

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

function renderGameRules() {
  console.log('What is the result of the expression?');
}

async function askQuestion() {
  const number1 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const number2 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const operation = getRandomElement(operations);

  console.log(`Question: ${number1} ${operation} ${number2}`);

  // eslint-disable-next-line no-await-in-loop,no-unused-vars
  const answer = await promptly.prompt('Your answer: ');

  return {
    number1, number2, operation, answer,
  };
}

function checkAnswer({
  number1, number2, operation, answer,
}) {
  const correctAnswer = MathFunctions[operation](number1, number2);

  // eslint-disable-next-line radix
  if (Number.parseInt(answer) !== correctAnswer) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    return false;
  }

  return true;
}

// eslint-disable-next-line import/prefer-default-export
export async function brainCalcGame() {
  await engine(renderGameRules, askQuestion, checkAnswer);
}
