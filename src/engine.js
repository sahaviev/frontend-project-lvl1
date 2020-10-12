import promptly from 'promptly';

import { greetings } from './cli.js';

export const Answer = {
  YES: 'yes',
  NO: 'no',
};

const MAX_QUESTIONS_COUNT = 3;

export async function engine(title, getQuestion) {
  const name = await greetings();

  console.log(title);

  let questions = 0;
  while (questions < MAX_QUESTIONS_COUNT) {
    const { question, answer } = getQuestion();

    console.log(`Question: ${question}`);

    // eslint-disable-next-line no-await-in-loop
    const userAnswer = await promptly.prompt('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    questions += 1;
  }

  console.log(`Congratulations, ${name}!`);
}
