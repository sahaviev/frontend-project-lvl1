export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomElement(array) {
  if (!array || array.length === 0) {
    return null;
  }
  return array[getRandomNumber(0, array.length)];
}

export function isEven(number) {
  return number % 2 === 0;
}

export function isPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

export function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

export function range(size, startAt = 0, step = 1) {
  return [...Array(size).keys()].map((i) => i * step + startAt);
}
