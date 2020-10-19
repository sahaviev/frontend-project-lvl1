#!/usr/bin/env node
import { calc } from '../src/games/calc.js';

calc()
  .catch((error) => {
    console.log('brain-calc.js: something went wrong');
    console.error(error);
  });
