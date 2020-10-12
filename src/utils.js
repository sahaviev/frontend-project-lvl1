export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomElement(array) {
  if (!array || array.length === 0) {
    return null;
  }
  return array[getRandomNumber(0, array.length)];
}
