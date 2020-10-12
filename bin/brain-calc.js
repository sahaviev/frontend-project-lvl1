#!/usr/bin/env node
import { brainCalcGame } from '../src/games/brain-calc-game.js';

brainCalcGame()
  .catch((error) => {
    console.log('brain-calc.js: something went wrong');
    console.error(error);
  });
