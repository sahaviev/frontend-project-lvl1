import { engine, Answer } from './engine.js';
import { getRandomNumber, isEven } from '../utils.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

async function askQuestion() {
  const number = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const question = `Question: ${number}`;
  const answer = isEven(number) ? Answer.YES : Answer.NO;
  return { question, answer };
}

// eslint-disable-next-line import/prefer-default-export
export async function brainEvenGame() {
  await engine('Answer "yes" if the number is even, otherwise answer "no".', askQuestion);
}
