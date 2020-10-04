#!/usr/bin/env node
import { brainPrimeGame } from '../index.js';

brainPrimeGame()
  .catch((error) => {
    console.log('brain-prime.js: something went wrong');
    console.error(error);
  });
