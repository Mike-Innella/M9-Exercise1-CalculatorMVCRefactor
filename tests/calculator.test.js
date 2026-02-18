const request = require('supertest');
const app = require('../app');

describe('Calculator API', () => {
  test('adds numbers', async () => {
    const res = await request(app).get('/api/calculator/add?a=1&b=2');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(3);
  });

  test('subtracts numbers', async () => {
    const res = await request(app).get('/api/calculator/subtract?a=5&b=3');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(2);
  });

  test('multiplies numbers', async () => {
    const res = await request(app).get('/api/calculator/multiply?a=2&b=5');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(10);
  });

  test('divides numbers', async () => {
    const res = await request(app).get('/api/calculator/divide?a=18&b=6');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(3);
  });

  test('adds decimals', async () => {
    const res = await request(app).get('/api/calculator/add?a=1.1&b=2.2');
    expect(res.status).toBe(200);
    expect(res.body.result).toBeCloseTo(3.3);
  });

  test('subtracts negative numbers', async () => {
    const res = await request(app).get('/api/calculator/subtract?a=-5&b=-3');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(-2);
  });

  test('adds large numbers', async () => {
    const res = await request(app).get('/api/calculator/add?a=1000000000&b=2000000000');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(3000000000);
  });

  test('exponent squares when only a is provided', async () => {
    const res = await request(app).get('/api/calculator/exponent?a=4');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(16);
  });

  test('exponent uses a^b when both params are provided', async () => {
    const res = await request(app).get('/api/calculator/exponent?a=2&b=5');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(32);
  });
});

describe('Calculator API error handling', () => {
  test('returns 400 when required params are missing', async () => {
    const res = await request(app).get('/api/calculator/add?a=1');
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Missing query parameters: a and b are required.');
  });

  test('returns 400 for invalid numeric input', async () => {
    const res = await request(app).get('/api/calculator/multiply?a=hello&b=5');
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Invalid input: a and b must be numbers.');
  });

  test('returns 400 when dividing by zero', async () => {
    const res = await request(app).get('/api/calculator/divide?a=10&b=0');
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Cannot divide by zero.');
  });

  test('returns 400 for exponent when a is missing', async () => {
    const res = await request(app).get('/api/calculator/exponent?b=3');
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Missing query parameter: a is required.');
  });

  test('returns 400 for exponent when b is invalid', async () => {
    const res = await request(app).get('/api/calculator/exponent?a=2&b=oops');
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Invalid input: a and b must be numbers.');
  });
});
