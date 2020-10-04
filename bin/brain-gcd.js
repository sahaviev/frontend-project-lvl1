#!/usr/bin/env node
import { brainGcdGame } from '../index.js';

brainGcdGame()
  .catch((error) => {
    console.log('brain-gcd.js: something went wrong');
    console.error(error);
  });
