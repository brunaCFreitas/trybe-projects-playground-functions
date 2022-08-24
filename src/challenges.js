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
  let newString = string.split(' ');
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
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // Realizado consulta para a lógica deste requisito no vídeo, Link: https://www.youtube.com/watch?v=F26OCFOvMPU .
  if ((Math.abs(mouse - cat1)) < (Math.abs(mouse - cat2))) {
    return 'cat1';
  } else if ((Math.abs(mouse - cat1)) > (Math.abs(mouse - cat2))) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (array[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;

}

// Desafio 9
function encode(phrase) {
  // seu código aqui
  let newPhrase = phrase;

  newPhrase = newPhrase.replace(/a/gi, '1');
  newPhrase = newPhrase.replace(/e/gi, '2');
  newPhrase = newPhrase.replace(/i/gi, '3');
  newPhrase = newPhrase.replace(/o/gi, '4');
  newPhrase = newPhrase.replace(/u/gi, '5');

  return newPhrase;
}

function decode(phrase) {
  // seu código aqui
  let newPhrase = phrase;

  newPhrase = newPhrase.replace(/1/gi, 'a');
  newPhrase = newPhrase.replace(/2/gi, 'e');
  newPhrase = newPhrase.replace(/3/gi, 'i');
  newPhrase = newPhrase.replace(/4/gi, 'o');
  newPhrase = newPhrase.replace(/5/gi, 'u');

  return newPhrase;
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
