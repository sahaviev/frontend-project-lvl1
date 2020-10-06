import { engine } from './engine.js';
import { gcd, getRandomNumber } from '../utils.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

function askQuestion() {
  const number1 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const number2 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const question = `Question: ${number1} ${number2}`;
  const answer = gcd(number1, number2);
  return { question, answer };
}

// eslint-disable-next-line import/prefer-default-export
export async function brainGcdGame() {
  await engine('Find the greatest common divisor of given numbers.', askQuestion);
}
