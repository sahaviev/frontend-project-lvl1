import { engine, Answer } from '../engine.js';
import { getRandomNumber } from '../utils.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 1000;

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  const n = number / 2;
  for (let i = 2; i < n; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function getQuestionAndAnswer() {
  const number = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const answer = isPrime(number) ? Answer.YES : Answer.NO;
  return { question: number, answer };
}

export async function brainPrimeGame() {
  await engine('Answer "yes" if given number is prime. Otherwise answer "no".', getQuestionAndAnswer);
}
