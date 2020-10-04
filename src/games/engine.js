import promptly from 'promptly';

import { greetings } from '../cli.js';

const MAX_GAMES_COUNT = 3;

// eslint-disable-next-line import/prefer-default-export
export async function engine(title, askQuestion) {
  const name = await greetings();

  console.log(title);

  let games = 0;
  while (games < MAX_GAMES_COUNT) {
    // eslint-disable-next-line no-await-in-loop
    const { question, answer } = await askQuestion();

    console.log(`Question: ${question}`);

    // eslint-disable-next-line no-await-in-loop,no-unused-vars
    const userAnswer = await promptly.prompt('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    games += 1;
  }

  console.log(`Congratulations, ${name}!`);
}
