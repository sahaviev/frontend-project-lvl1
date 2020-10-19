#!/usr/bin/env node
import { gcd } from '../src/games/gcd.js';

gcd()
  .catch((error) => {
    console.log('brain-gcd.js: something went wrong');
    console.error(error);
  });
