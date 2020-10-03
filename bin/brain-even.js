#!/usr/bin/env node
import { brainEvenGame } from '../index.js';

brainEvenGame()
  .catch((error) => {
    console.log('brain-even.js: something went wrong');
    console.error(error);
  });
