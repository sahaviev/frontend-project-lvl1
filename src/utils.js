export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function isEven(number) {
  return number % 2 === 0;
}
