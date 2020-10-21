import promptly from 'promptly';

export const possibleAnswers = {
  YES: 'yes',
  NO: 'no',
};

const MAX_QUESTIONS_COUNT = 3;

export async function engine(title, getQuestionAndAnswer) {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?: ');
  console.log(`Hello, ${name}!`);

  console.log(title);

  let questions = 0;
  while (questions < MAX_QUESTIONS_COUNT) {
    const { question, answer } = getQuestionAndAnswer();

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
