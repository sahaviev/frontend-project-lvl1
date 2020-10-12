#!/usr/bin/env node
import { brainProgressionGame } from '../src/games/brain-progression-game.js';

brainProgressionGame()
  .catch((error) => {
    console.log('brain-progression.js: something went wrong');
    console.error(error);
  });
