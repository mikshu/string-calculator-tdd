# string-calculator-tdd
This project implements a String Calculator based on the rules of the TDD Kata by Roy Observe. The purpose of the project is to demonstrate how to use Test-Driven Development (TDD) in building a simple calculator that sums numbers provided as strings.

Features
- Handles an empty string input (returns 0).
- Sums up to two numbers separated by commas.
- Handles an unknown number of comma-separated numbers.
- Supports new line characters as delimiters.
- Allows for custom delimiters (e.g., //;\n1;2 where ; is the delimiter).
- Throws an error when negative numbers are provided (e.g., "-1,-2" throws      negative numbers not allowed: -1, -2).

Project Setup
1. Clone the repository
    git clone https://github.com/your-username/string-calculator-tdd.git
2. Navigate to the project directory:
    cd string-calculator-tdd
3. Install dependencies (if using JavaScript/Node.js):
    npm install
4. Running the Tests
   To run the test suite, use the following command (assuming Jest for JavaScript):
   npm run test

How the Project Works
The add() function takes a string of numbers and delimiters and returns the sum of the numbers. The program:
- Starts with the simplest test (empty string).
- Gradually adds complexity with more test cases (e.g., multiple numbers, custom  delimiters, negative number handling).
- Implements each feature in a test-driven manner, writing tests first and code afterward.

Development Process
This project follows the Test-Driven Development (TDD) process:

- Write a test for each case.
- Write code to pass the test.
- Refactor the code after the test passes.
- Repeat for new features.

How to Contribute
- Feel free to fork the repository and submit pull requests. Feedback and  suggestions are welcome!