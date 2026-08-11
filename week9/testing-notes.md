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