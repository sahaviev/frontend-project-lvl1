import promptly from 'promptly';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function isEven(number) {
  return number % 2 === 0;
}

function checkAnswer(number, answer) {
  const even = isEven(number);

  if (answer !== 'yes' && answer !== 'no') {
    console.log(`'${answer}' is wrong answer ;(.`);
    return false;
  }

  if (!even && answer === 'yes') {
    console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
    return false;
  }

  if (even && answer === 'no') {
    console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
    return false;
  }

  return true;
}

// eslint-disable-next-line import/prefer-default-export
export const evenGame = async (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let answersCount = 0;
  while (answersCount < 3) {
    const number = getRandomNumber(1, 100);
    console.log(`Question: ${number}`);

    // eslint-disable-next-line no-await-in-loop
    const answer = await promptly.prompt('Your answer: ');

    if (checkAnswer(number, answer)) {
      console.log('Correct!');
      answersCount += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
