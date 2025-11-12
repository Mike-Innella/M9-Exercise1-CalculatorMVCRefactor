const request = require('supertest');
const app = require('../app');

describe('Calculator API', () => {
  test('adds numbers', async () => {
    const res = await request(app).get('/api/calculator/add?a=1&b=2');
    expect(res.body.result).toBe(3);
  });

  test('subtracts numbers', async () => {
    const res = await request(app).get('/api/calculator/subtract?a=5&b=3');
    expect(res.body.result).toBe(2);
  });

  test('multiplies numbers', async () => {
    const res = await request(app).get('/api/calculator/multiply?a=2&b=5');
    expect(res.body.result).toBe(10);
  });

  test('divides numbers', async () => {
    const res = await request(app).get('/api/calculator/divide?a=18&b=6');
    expect(res.body.result).toBe(3);
  });
});

test('adds decimals', async () => {
  const res = await request(app).get('/api/calculator/add?a=1.1&b=2.2');
  expect(res.body.result).toBeCloseTo(3.3);
});

test('subtracts negative numbers', async () => {
  const res = await request(app).get('/api/calculator/subtract?a=-5&b=-3');
  expect(res.body.result).toBe(-2);
});

test('adds large numbers', async () => {
  const res = await request(app).get('/api/calculator/add?a=1000000000&b=2000000000');
  expect(res.body.result).toBe(3000000000);
});