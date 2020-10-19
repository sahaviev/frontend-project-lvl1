#!/usr/bin/env node
import { prime } from '../src/games/prime.js';

prime()
  .catch((error) => {
    console.log('brain-prime.js: something went wrong');
    console.error(error);
  });
