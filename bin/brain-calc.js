#!/usr/bin/env node
import { greetings, brainCalcGame } from '../index.js';

async function brainCalc() {
  const name = await greetings();
  await brainCalcGame(name);
}

brainCalc();
