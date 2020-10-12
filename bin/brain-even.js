#!/usr/bin/env node
import { brainEvenGame } from '../src/games/brain-even-game.js';

brainEvenGame()
  .catch((error) => {
    console.log('brain-even.js: something went wrong');
    console.error(error);
  });
