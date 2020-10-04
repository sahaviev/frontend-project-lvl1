import { engine } from './engine.js';
import { getRandomNumber, isPrime } from '../utils.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 1000;

const Answer = {
  YES: 'yes',
  NO: 'no',
};

async function askQuestion() {
  const number = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const question = `Question: ${number}`;
  const answer = isPrime(number) ? Answer.YES : Answer.NO;
  return { question, answer };
}

// eslint-disable-next-line import/prefer-default-export
export async function brainPrimeGame() {
  await engine('Answer "yes" if given number is prime. Otherwise answer "no".', askQuestion);
}
