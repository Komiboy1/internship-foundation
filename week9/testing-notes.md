# Testing Practice Notes

## Why Write Tests

A test should be written even when a function currently works because the code may be changed or reused later. Tests provide confidence that existing functionality continues to work after changes are made. If a change introduces a regression, an existing test can fail and show that something has been broken. Tests are therefore useful for detecting problems early and preventing working features from silently breaking.

### Unit Tests

A unit test checks a small, isolated part of a program, usually a single function. It verifies that the function produces the expected result for a particular input.

### Regression

A regression happens when a change to the code causes functionality that previously worked to stop working. Tests can help detect regressions by checking that previously expected behaviour still works.

### Arrange → Act → Assert

The Arrange → Act → Assert pattern is a common structure for writing tests:

1. Arrange – Set up the data and conditions required for the test.
2. Act – Run the function or code being tested.
3. Assert – Check that the result matches the expected result.

Example:

```javascript
test('adds two numbers', () => {
    // Arrange
    const a = 2;
    const b = 3;

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(5);
});

## Jest Setup and First Test

Jest was installed as a development dependency using `npm install --save-dev jest`. The `package.json` test script was configured to run Jest using `npm test`.

I created a `math.js` file containing two functions: `add()` and `multiply()`. I then created `math.test.js` and wrote tests to verify that both functions produced the expected results.

I also deliberately changed the `add()` function so that it produced an incorrect result. When I ran `npm test`, Jest identified the failing test and showed the expected and received values. After correcting the function, all tests passed again.

The `expect().toBe()` method checks whether the value returned by the function exactly matches the expected value.