import { engine } from '../engine.js';
import { getRandomNumber } from '../utils.js';

const PROGRESSION_START_MIN = 0;
const PROGRESSION_START_MAX = 30;
const PROGRESSION_MIN_STEP = 2;
const PROGRESSION_MAX_STEP = 5;
const PROGRESSION_MIN_LENGTH = 5;
const PROGRESSION_MAX_LENGTH = 15;

function range(size, startAt = 0, step = 1) {
  return [...Array(size).keys()].map((i) => i * step + startAt);
}

function getQuestion() {
  const start = getRandomNumber(PROGRESSION_START_MIN, PROGRESSION_START_MAX);
  const size = getRandomNumber(PROGRESSION_MIN_LENGTH, PROGRESSION_MAX_LENGTH);
  const step = getRandomNumber(PROGRESSION_MIN_STEP, PROGRESSION_MAX_STEP);
  const hidden = getRandomNumber(0, size - 1);
  const progression = range(size, start, step);
  const answer = progression[hidden].toString();
  progression[hidden] = '..';
  const question = progression.toString();
  return { question, answer };
}

export async function brainProgressionGame() {
  await engine('What number is missing in the progression?', getQuestion);
}
