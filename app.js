const express = require('express');
const app = express();
const calcRoutes = require('./routes/calculatorRoutes')

app.use(express.static('public'));
app.use(express.json());

app.use('/api/calculator', calcRoutes);

module.exports = app;
