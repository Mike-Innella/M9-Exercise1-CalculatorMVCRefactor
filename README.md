
# M9-API-Development-Labs

This guide covers the specific requirements for the "Blog Engine" track (Ex 2 & 3), the Third-Party API integration (Ex 4), and the Real-Time Chat (Ex 5).

---

## Exercise 1: Calculator MVC Refactor

**Goal:** Ensure your Module 5 Calculator follows MVC.

Since this relies on your existing code, use this checklist to verify your structure:

1. **Model (Data/Logic):**

   - Do you have a separate class or function that handles the _math_?
   - _Example:_ A `CalculatorModel` class that has methods like `add(a, b)`, `subtract(a, b)`. It should **not** touch the HTML.
2. **View (UI):**

   - Your `index.html` and `style.css`.
   - It should effectively be "dumb"—it just displays buttons and a result screen.
3. **Controller (The Glue):**

   - Your `script.js`.
   - It listens for clicks (`addEventListener`), grabs values from the **View**, passes them to the **Model** to calculate, and updates the **View** with the result.

---
