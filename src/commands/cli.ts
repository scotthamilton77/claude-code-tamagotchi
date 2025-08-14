#!/usr/bin/env bun
// CLI handler for pet commands - to be called directly from command line
import { CommandProcessor } from './CommandProcessor';

const command = process.argv[2];
const args = process.argv.slice(3).join(' ');

async function main() {
  if (!command) {
    console.log('Usage: pet <command> [args]');
    return;
  }
  
  const response = await CommandProcessor.processCommand(`/${command} ${args}`);
  console.log(response);
}

main().catch(console.error);