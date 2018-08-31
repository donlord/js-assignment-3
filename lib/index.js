'use strict';

var _lib = require('./lib');

console.log((0, _lib.createPrompt)()); // TODO import readFile, writeFile, chooseRandom, createPrompt, and createQuestions

// TODO read in the file createPrompt.json, run the object read in through createPrompt,
// pass the result of createPrompt to chooseRandom, and then save the result to
// cp_solutions.json

// TODO read the file createQuestions.json. Pass the read in object to createQuestions,
// pass its result to chooseRandom, and then save the final result to cq_solutions.json

console.log((0, _lib.createPrompt)({}));
console.log((0, _lib.createPrompt)(undefined));