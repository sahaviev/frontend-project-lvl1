#!/usr/bin/env node
import { progression } from '../src/games/progression.js';

progression()
  .catch((error) => {
    console.log('brain-progression.js: something went wrong');
    console.error(error);
  });
