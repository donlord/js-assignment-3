'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// TODO copy chooseRandom() from previous assignment
const chooseRandom = exports.chooseRandom = (array, numItems) => {
  if (array === undefined) {
    return [];
  }
  if (array.length <= 2) {
    return array;
  }
  if (numItems > array.length || numItems === undefined) {
    numItems = Math.floor(Math.random() * array.length);
  }
  let indexArray = [];
  // Fill indexArray with random indices
  while (indexArray.length != numItems) {
    let randInt = Math.floor(Math.random() * array.length);
    if (indexArray.length === 0) {
      indexArray.push(randInt);
    }
    let inArray = false;
    // check to see if randomInt is in the indexed array, if so continue else add it to the indexArray
    for (let i = 0; i < indexArray.length; i++) {
      if (indexArray[i] === randInt) {
        inArray = true;
      }
    }
    if (inArray == false) {
      indexArray.push(randInt);
    }
  }
  // return the new array with the random values from indices indicated in indexArray
  let filteredArray = [];
  for (let i = 0; i < indexArray.length; i++) {
    filteredArray.push(array[indexArray[i]]);
  }
  return filteredArray;
};

// TODO copy createPrompt() from previous assignment
const createPrompt = exports.createPrompt = ({ numQuestions = 1, numChoices = 2 } = {}) => {
  // formatter function
  //   if (anObject === undefined) {
  //     anObject = { numQuestion: 1, numChoices: 2 }
  //   }
  //   if (anObject[0] === undefined) {
  //     anObject = { numQuestion: 1, numChoices: 2 }
  //   }
  //   if (anObject[0] === 'number') {
  //     anObject = { numQuestion: 1, numChoices: 2 }
  //   }
  //   if (anObject[1] === 'number') {
  //     anObject = { numQuestion: 1, numChoices: 2 }
  //   }
  //   if (anObject != 'object') {
  //     anObject = { numQuestion: 1, numChoices: 2 }
  //   }
  //   if (anObject['numQuestions'] === 0) {
  //     anObject = { numQuestion: 1, numChoices: 2 }
  //   }

  let arrObjs = [];
  for (let x = 0; x < numQuestions; x++) {
    let qObj = {};
    qObj['type'] = 'input';
    qObj['name'] = `question-${x + 1}`;
    qObj['message'] = `Enter question ${x + 1}`;
    arrObjs.push(qObj);
    for (let j = 0; j < numChoices; j++) {
      let aObj = {};
      aObj['type'] = 'input';
      aObj['name'] = `question-${x + 1}-choice-` + (j + 1);
      aObj['message'] = `Enter answer choice ${j + 1} for question ${x + 1}`;
      arrObjs.push(aObj);
    }
  }
  return arrObjs;
};
// TODO implement createQuestions()
const createQuestions = exports.createQuestions = inputObject => {
  if (inputObject === undefined || inputObject[0] === undefined) {
    return [];
  }
  arObjs = [];
  let tempObj = {
    type: '',
    name: '',
    message: '',
    choices: []
    // arObjs.push(tempObj)
  };for (let i = 0; i < inputObject.length; i++) {
    //   console.log(i + ' is i and this is the value ' + b[i][0])
    if (i === 0) {
      tempObj['type'] = 'list';
      tempObj['name'] = inputObject[i][0];
      tempObj['message'] = inputObject[i][1];
      tempObj['choices'] = [];
      // arObjs.push(tempObj)
      continue;
    }

    if (inputObject[i][0].includes(tempObj['name'])) {
      // arObjs[i].choices.push(b[i][1])
      tempObj['choices'].push(inputObject[i][1]);
    } else {
      arObjs.push(tempObj);
      tempObj['name'] = inputObject[i][0];
      tempObj['message'] = inputObject[i][1];
      tempObj['choices'] = [];
      // arObjs.push(tempObj)
    }
  }
};

// TODO export above functions