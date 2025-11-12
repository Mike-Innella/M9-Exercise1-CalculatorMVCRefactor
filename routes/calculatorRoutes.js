const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
  const { a, b } = req.query;
  const number1 = parseFloat(a);
  const number2 = parseFloat(b);

  const sum = number1 + number2;
  res.status(200).json({ result: sum });
});

module.exports = router;
