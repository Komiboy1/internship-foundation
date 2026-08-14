# Week 9 Internship Report – Writing Tests with Jest

## Intern Information

* **Week:** 9
* **Topic:** Writing Actual Tests with Jest




## Overview

This week focused on learning how to write automated unit tests using Jest. I moved from understanding testing as a concept to creating real test suites for JavaScript functions, running tests from the terminal, and learning how well-structured code makes testing easier and more reliable.

## Tasks Completed

### Task 1: Week 8 Review

* Reviewed previous debugging work and ensured documentation was complete.

### Task 2: Understanding Testing

* Studied the purpose of unit testing.
* Learned what regressions are and why developers write tests.
* Practiced the Arrange → Act → Assert testing pattern.

### Task 3: Jest Setup

* Created the `testing-practice` project.
* Installed and configured Jest.
* Wrote tests for `add()` and `multiply()`.
* Ran tests using `npm test`.
* Deliberately broke a function, observed the failing test, and fixed it.

### Task 4: Testing Week 5 Exercises

* Refactored Week 5 functions into `exercises.js`.
* Wrote six Jest tests covering normal and edge cases.
* Successfully passed all tests.

### Task 5: Testable Code

* Learned the difference between pure and impure functions.
* Identified examples from my own code.
* Documented why separating business logic from DOM manipulation improves testability.

### Task 6: Repository & Documentation

* Created the Week 9 repository.
* Used the `feat/week-9-testing` branch.
* Added testing files, notes, and project documentation.


## Challenges Encountered

One of the main challenges was understanding how to structure code so it could be tested independently. Some earlier JavaScript functions were closely tied to the DOM, making them difficult to test directly. I resolved this by extracting the core logic into pure functions that accept inputs and return outputs.

Another challenge was interpreting Jest's failure output. After intentionally breaking a function, I learned how to read the expected and received values to identify the source of the error.



## What I Learned

* How to install and configure Jest in a Node.js project.
* How to write unit tests using `test()` and `expect().toBe()`.
* The importance of testing edge cases.
* How regressions can be detected automatically through existing tests.
* Why pure functions are significantly easier to test than functions with side effects.



## Reflection

Before this week, I viewed testing as an extra step after writing code. After writing real Jest tests, I now understand that tests provide confidence when modifying existing code. They help detect regressions quickly and make refactoring much safer, making testing an essential part of software development rather than an optional task.



## Repository & Pull Request

Repository: https://github.com/Komiboy1/internship-foundation.git


## Week 10 Plan

* Learn more advanced Jest matchers and mock functions.
* Practice testing asynchronous JavaScript code.
* Improve test coverage for larger projects.
* Continue strengthening Git workflow and documentation habits.
