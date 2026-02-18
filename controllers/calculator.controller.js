const calculatorModel = require('../models/calculator.model');

function getRequiredNumbers(req, res) {
  const { a, b } = req.query;

  if (a === undefined || b === undefined) {
    res
      .status(400)
      .json({ error: 'Missing query parameters: a and b are required.' });
    return null;
  }

  const number1 = Number(a);
  const number2 = Number(b);

  if (Number.isNaN(number1) || Number.isNaN(number2)) {
    res
      .status(400)
      .json({ error: 'Invalid input: a and b must be numbers.' });
    return null;
  }

  return { number1, number2 };
}

function add(req, res) {
  const numbers = getRequiredNumbers(req, res);
  if (!numbers) return;

  const result = calculatorModel.add(numbers.number1, numbers.number2);
  res.status(200).json({ result });
}

function subtract(req, res) {
  const numbers = getRequiredNumbers(req, res);
  if (!numbers) return;

  const result = calculatorModel.subtract(numbers.number1, numbers.number2);
  res.status(200).json({ result });
}

function multiply(req, res) {
  const numbers = getRequiredNumbers(req, res);
  if (!numbers) return;

  const result = calculatorModel.multiply(numbers.number1, numbers.number2);
  res.status(200).json({ result });
}

function divide(req, res) {
  const numbers = getRequiredNumbers(req, res);
  if (!numbers) return;

  if (numbers.number2 === 0) {
    res.status(400).json({ error: 'Cannot divide by zero.' });
    return;
  }

  const result = calculatorModel.divide(numbers.number1, numbers.number2);
  res.status(200).json({ result });
}

function exponent(req, res) {
  const { a, b } = req.query;

  if (a === undefined) {
    res.status(400).json({ error: 'Missing query parameter: a is required.' });
    return;
  }

  const base = Number(a);
  if (Number.isNaN(base)) {
    res.status(400).json({ error: 'Invalid input: a and b must be numbers.' });
    return;
  }

  if (b === undefined) {
    res.status(200).json({ result: calculatorModel.exponent(base) });
    return;
  }

  const exponentValue = Number(b);
  if (Number.isNaN(exponentValue)) {
    res.status(400).json({ error: 'Invalid input: a and b must be numbers.' });
    return;
  }

  res.status(200).json({ result: calculatorModel.exponent(base, exponentValue) });
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  exponent,
};
