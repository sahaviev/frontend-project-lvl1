#!/usr/bin/env node
import { brainGcdGame } from '../src/games/brain-gcd-game.js';

brainGcdGame()
  .catch((error) => {
    console.log('brain-gcd.js: something went wrong');
    console.error(error);
  });
