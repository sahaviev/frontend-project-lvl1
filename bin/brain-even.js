#!/usr/bin/env node
import { greetings, brainEvenGame } from '../index.js';

async function brainEven() {
  const name = await greetings();
  await brainEvenGame(name);
}

brainEven();
