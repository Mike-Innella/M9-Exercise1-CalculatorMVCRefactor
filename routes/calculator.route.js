const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculator.controller');

router.get('/add', calculatorController.add);
router.get('/subtract', calculatorController.subtract);
router.get('/multiply', calculatorController.multiply);
router.get('/divide', calculatorController.divide);
router.get('/exponent', calculatorController.exponent);

module.exports = router;
