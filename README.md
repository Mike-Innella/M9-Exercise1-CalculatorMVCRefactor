# Lab 2: Calculator Backend

Using your first Express app as a guide, extend your `calculatorRoutes`. Follow the same structure as the `add` route to create new routes for:

- `subtract`
- `multiply`
- `divide`

## Expected Endpoints

Assuming your routes are mounted at `/api/calculator`, the full endpoints should look like:

```bash
GET /api/calculator/add?a=1&b=2
GET /api/calculator/subtract?a=5&b=3
GET /api/calculator/multiply?a=2&b=5
GET /api/calculator/divide?a=18&b=6
```

Each route should return JSON like:

```json
{ "result": 3 }
```

## Bonus Challenge

Create a new route `/api/calculator/exponent` that behaves as follows:

- If only `a` is provided: return `a^2`
- If both `a` and `b` are provided: return `a^b`

## Error Handling (Optional but Recommended)

- If either `a` or `b` is missing, return a 400 status with a helpful error message.
- If inputs are not numbers, return a 400 status with a message like `"Invalid input: a and b must be numbers."`
- If dividing by zero, return a 400 status with a message like `"Cannot divide by zero."`

## Testing Tip

Once your server is running, test your routes using:

```bash
curl "http://localhost:3000/api/calculator/add?a=1&b=2"
```

You can also use Thunder Client or your browser for GET requests.