#!/usr/bin/env node

import { greetings, evenGame } from '../index.js';

async function brainEven() {
  const name = await greetings();
  await evenGame(name);
}

brainEven();
