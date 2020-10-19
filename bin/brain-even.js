#!/usr/bin/env node
import { even } from '../src/games/even.js';

even()
  .catch((error) => {
    console.log('brain-even.js: something went wrong');
    console.error(error);
  });
