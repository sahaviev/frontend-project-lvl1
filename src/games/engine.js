import { greetings } from '../cli.js';

const MAX_GAMES_COUNT = 3;

// eslint-disable-next-line import/prefer-default-export
export async function engine(renderGameRules, askQuestion, checkAnswer) {
  const name = await greetings();

  renderGameRules();

  let games = 0;
  while (games < MAX_GAMES_COUNT) {
    // eslint-disable-next-line no-await-in-loop
    const question = await askQuestion();

    if (!checkAnswer(question)) {
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    games += 1;
  }

  console.log(`Congratulations, ${name}!`);
}
