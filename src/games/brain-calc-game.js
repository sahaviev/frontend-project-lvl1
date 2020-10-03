import promptly from 'promptly';
import { getRandomNumber, getRandomElement } from '../utils.js';

const MAX_ANSWERS_COUNT = 3;
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

function checkAnswer(operation, number1, number2, answer) {
  const correctAnswer = MathFunctions[operation](number1, number2);

  // eslint-disable-next-line radix
  if (Number.parseInt(answer) !== correctAnswer) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    return false;
  }

  console.log('Correct!');
  return true;
}

// eslint-disable-next-line import/prefer-default-export
export const brainCalcGame = async (name) => {
  console.log('What is the result of the expression?');

  let answersCount = 0;
  while (answersCount < MAX_ANSWERS_COUNT) {
    const number1 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    const number2 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    const operation = getRandomElement(operations);

    console.log(`Question: ${number1} ${operation} ${number2}`);

    // eslint-disable-next-line no-await-in-loop,no-unused-vars
    const answer = await promptly.prompt('Your answer: ');

    if (!checkAnswer(operation, number1, number2, answer)) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
    answersCount += 1;
  }

  console.log(`Congratulations, ${name}!`);
};
