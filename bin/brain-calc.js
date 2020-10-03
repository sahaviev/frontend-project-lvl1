#!/usr/bin/env node
import { brainCalcGame } from '../index.js';

brainCalcGame()
  .catch((error) => {
    console.log('brain-calc.js: something went wrong');
    console.error(error);
  });
