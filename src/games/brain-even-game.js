import promptly from 'promptly';

import { getRandomNumber, isEven } from '../utils.js';

const MAX_ANSWERS_COUNT = 3;
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

const Answer = {
  YES: 'yes',
  NO: 'no',
};

function checkAnswer(number, answer) {
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

  console.log('Correct!');
  return true;
}

// eslint-disable-next-line import/prefer-default-export
export const brainEvenGame = async (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let answersCount = 0;
  while (answersCount < MAX_ANSWERS_COUNT) {
    const number = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    console.log(`Question: ${number}`);

    // eslint-disable-next-line no-await-in-loop
    const answer = await promptly.prompt('Your answer: ');

    if (!checkAnswer(number, answer)) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
    answersCount += 1;
  }

  console.log(`Congratulations, ${name}!`);
};
