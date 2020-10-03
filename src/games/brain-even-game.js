import promptly from 'promptly';

import { engine } from './engine.js';
import { getRandomNumber, isEven } from '../utils.js';

const Answer = {
  YES: 'yes',
  NO: 'no',
};

function renderGameRules() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

async function askQuestion() {
  const number = getRandomNumber(1, 100);
  console.log(`Question: ${number}`);

  // eslint-disable-next-line no-await-in-loop
  const answer = await promptly.prompt('Your answer: ');

  return { number, answer };
}

function checkAnswer({ number, answer }) {
  const even = isEven(number);

  if (answer !== Answer.YES && answer !== Answer.NO) {
    console.log(`'${answer}' is wrong answer ;(.`);
    return false;
  }

  if (!even && answer === Answer.YES) {
    console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
    return false;
  }

  if (even && answer === Answer.NO) {
    console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
    return false;
  }

  return true;
}

// eslint-disable-next-line import/prefer-default-export
export async function brainEvenGame() {
  await engine(renderGameRules, askQuestion, checkAnswer);
}
