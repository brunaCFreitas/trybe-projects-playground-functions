// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let newString = string.split(" ");
  return newString;
}

// Desafio 4
function concatName(string) {
  // seu código aqui
  let concat = `${string[string.length - 1]}, ${string[0]}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let teamPoints = (wins * 3) + ties;
  return teamPoints;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let biggerNumber = numbers[0];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > biggerNumber) {
      biggerNumber = numbers[index];
    }
  }
  let counter = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === biggerNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
