// Desafio 11
function checkSize(numbers) {
  if (numbers.length !== 11) {
    return false;
  }
  return true;
}

function checkValues(numbers) {
  for (const number of numbers) {
    if (number < 0 || number > 9) {
      return false;
    }
  }
  return true;
}

function checkRepeatedNumber(numbers) {
  const repeatedNumbersCounters = {};

  for (const number of numbers) {
    if (!repeatedNumbersCounters[number]) {
      repeatedNumbersCounters[number] = 0;
    }
    repeatedNumbersCounters[number] += 1;
    if (repeatedNumbersCounters[number] >= 3) {
      return false;
    }
  }
  return true;
}

function generatePhoneNumber(numbers) {
  // seu código aqui
  if (!checkSize(numbers)) {
    return 'Array com tamanho incorreto.';
  }
  if (!checkValues(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (!checkRepeatedNumber(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  const ddd = numbers.slice(0, 2).join('');
  const firstNumbers = numbers.slice(2, 7).join('');
  const lastNumbers = numbers.slice(7, 11).join('');
  const numberTelephone = `(${ddd}) ${firstNumbers}-${lastNumbers}`;
  return numberTelephone;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
