import { engine, possibleAnswers } from '../engine.js';
import { getRandomNumber } from '../utils.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;
const GAME_TITLE = `Answer "${possibleAnswers.YES}" if the number is even, otherwise answer "${possibleAnswers.NO}".`;

function isEven(number) {
  return number % 2 === 0;
}

function getQuestionAndAnswer() {
  const number = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const answer = isEven(number) ? possibleAnswers.YES : possibleAnswers.NO;
  return { question: number, answer };
}

export async function even() {
  await engine(GAME_TITLE, getQuestionAndAnswer);
}
