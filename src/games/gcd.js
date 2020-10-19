import { engine } from '../engine.js';
import { getRandomNumber } from '../utils.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;
const GAME_TITLE = 'Find the greatest common divisor of given numbers.';

function getGcd(a, b) {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
}

function getQuestionAndAnswer() {
  const number1 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const number2 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const answer = getGcd(number1, number2).toString();
  const question = `${number1} ${number2}`;
  return { question, answer };
}

export async function gcd() {
  await engine(GAME_TITLE, getQuestionAndAnswer);
}
