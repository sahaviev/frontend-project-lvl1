import { engine } from '../engine.js';
import { getRandomNumber } from '../utils.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

function getQuestionAndAnswer() {
  const number1 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const number2 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const answer = gcd(number1, number2).toString();
  const question = `${number1} ${number2}`;
  return { question, answer };
}

export async function brainGcdGame() {
  await engine('Find the greatest common divisor of given numbers.', getQuestionAndAnswer);
}
