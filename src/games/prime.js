import { engine, possibleAnswers } from '../engine.js';
import { getRandomNumber } from '../utils.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 1000;
const GAME_TITLE = `Answer "${possibleAnswers.YES}" if given number is prime. Otherwise answer "${possibleAnswers.NO}".`;

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  const maxDivisor = number / 2;
  for (let i = 2; i < maxDivisor; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function getQuestionAndAnswer() {
  const number = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const answer = isPrime(number) ? possibleAnswers.YES : possibleAnswers.NO;
  return { question: number, answer };
}

export async function prime() {
  await engine(GAME_TITLE, getQuestionAndAnswer);
}
