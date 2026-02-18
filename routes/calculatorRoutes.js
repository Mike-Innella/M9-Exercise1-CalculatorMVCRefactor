const express = require('express');
const router = express.Router();

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

router.get('/add', (req, res) => {
  const numbers = getRequiredNumbers(req, res);
  if (!numbers) return;

  const sum = numbers.number1 + numbers.number2;
  res.status(200).json({ result: sum });
});

router.get('/subtract', (req, res) => {
  const numbers = getRequiredNumbers(req, res);
  if (!numbers) return;

  const difference = numbers.number1 - numbers.number2;
  res.status(200).json({ result: difference });
});

router.get('/multiply', (req, res) => {
  const numbers = getRequiredNumbers(req, res);
  if (!numbers) return;

  const product = numbers.number1 * numbers.number2;
  res.status(200).json({ result: product });
});

router.get('/divide', (req, res) => {
  const numbers = getRequiredNumbers(req, res);
  if (!numbers) return;

  if (numbers.number2 === 0) {
    res.status(400).json({ error: 'Cannot divide by zero.' });
    return;
  }

  const quotient = numbers.number1 / numbers.number2;
  res.status(200).json({ result: quotient });
});

router.get('/exponent', (req, res) => {
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
    res.status(200).json({ result: base ** 2 });
    return;
  }

  const exponent = Number(b);
  if (Number.isNaN(exponent)) {
    res.status(400).json({ error: 'Invalid input: a and b must be numbers.' });
    return;
  }

  res.status(200).json({ result: base ** exponent });
});

module.exports = router;
