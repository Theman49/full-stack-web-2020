Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@Theman49 
ghaiklor
/
advent-of-code-2015
2
152
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
advent-of-code-2015/day-07/part-1/solution.js /
@ghaiklor
ghaiklor Fix issue with naming folders
Latest commit 269ed65 on Dec 28, 2015
 History
 1 contributor
56 lines (45 sloc)  1.67 KB
 
"use strict";

const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt', 'utf-8').split('\n');
const COMMAND_REGEX = /[A-Z]+/g;
const ARGUMENTS_REGEX = /[a-z0-9]+/g;

// Our parsed wires in format {wire: value} or {wire: instruction}
const WIRES = new Map();

// Dictionary of our bitwise methods
const BITWISE_METHODS = {
  AND: (a, b) => a & b,
  OR: (a, b) => a | b,
  NOT: a => ~a,
  LSHIFT: (a, b) => a << b,
  RSHIFT: (a, b) => a >> b
};

// Parse instruction from input and return object with command, arguments and destination wire
const parseInstruction = instruction => {
  const command = instruction.match(COMMAND_REGEX);
  const args = instruction.match(ARGUMENTS_REGEX);
  const destination = args.pop();

  return {
    command: command && command[0],
    args: args.map(arg => isNaN(Number(arg)) ? arg : Number(arg)),
    destination: destination
  };
};

// Calculate value for one of the wires (recursively)
const calculateWire = wireName => {
  const wire = WIRES.get(wireName);

  if (typeof wireName === 'number') return wireName;
  if (typeof wire === 'number') return wire;
  if (typeof wire === 'undefined') return undefined;

  if (!wire.command) {
    WIRES.set(wireName, calculateWire(wire.args[0]));
  } else {
    WIRES.set(wireName, BITWISE_METHODS[wire.command](calculateWire(wire.args[0]), calculateWire(wire.args[1])));
  }

  return WIRES.get(wireName);
};

// Fill WIRES with parsed instructions and their future values
INPUT.forEach(instruction => {
  const parsedInstruction = parseInstruction(instruction);
  WIRES.set(parsedInstruction.destination, {command: parsedInstruction.command, args: parsedInstruction.args});
});

console.log(calculateWire('a'));
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
