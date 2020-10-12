#!/usr/bin/env node
import { brainPrimeGame } from '../src/games/brain-prime-game.js';

brainPrimeGame()
  .catch((error) => {
    console.log('brain-prime.js: something went wrong');
    console.error(error);
  });
