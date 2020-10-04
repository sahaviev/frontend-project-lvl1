#!/usr/bin/env node
import { brainProgressionGame } from '../index.js';

brainProgressionGame()
  .catch((error) => {
    console.log('brain-progression.js: something went wrong');
    console.error(error);
  });
