import { engine, Answer } from '../engine.js';
import { getRandomNumber } from '../utils.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

function isEven(number) {
  return number % 2 === 0;
}

function getQuestionAndAnswer() {
  const number = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const answer = isEven(number) ? Answer.YES : Answer.NO;
  return { question: number, answer };
}

export async function brainEvenGame() {
  await engine('Answer "yes" if the number is even, otherwise answer "no".', getQuestionAndAnswer);
}
