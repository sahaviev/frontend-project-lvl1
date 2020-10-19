import { engine } from '../engine.js';
import { getRandomNumber } from '../utils.js';

const PROGRESSION_START_MIN = 0;
const PROGRESSION_START_MAX = 30;
const PROGRESSION_MIN_STEP = 2;
const PROGRESSION_MAX_STEP = 5;
const PROGRESSION_MIN_LENGTH = 5;
const PROGRESSION_MAX_LENGTH = 15;
const GAME_TITLE = 'What number is missing in the progression?';

function range(size, startAt = 0, step = 1) {
  return [...Array(size).keys()].map((i) => i * step + startAt);
}

function getQuestionAndAnswer() {
  const start = getRandomNumber(PROGRESSION_START_MIN, PROGRESSION_START_MAX);
  const size = getRandomNumber(PROGRESSION_MIN_LENGTH, PROGRESSION_MAX_LENGTH);
  const step = getRandomNumber(PROGRESSION_MIN_STEP, PROGRESSION_MAX_STEP);
  const hidden = getRandomNumber(0, size - 1);
  const progressionRaw = range(size, start, step);
  const answer = progressionRaw[hidden].toString();
  progressionRaw[hidden] = '..';
  const question = progressionRaw.toString();
  return { question, answer };
}

export async function progression() {
  await engine(GAME_TITLE, getQuestionAndAnswer);
}
