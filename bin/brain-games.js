#!/usr/bin/env node
import { greetings } from '../index.js';

greetings()
  .catch((error) => {
    console.log('brain-games.js: something went wrong');
    console.error(error);
  });
