# Challenge
- Usage of `RandomColor` class
  ```js
  const randomColor = new RandomColor();
  randomColor.newColor(); // returns a random color, e.g. 'green'
  randomColor.newColor(); // returns another color, e.g. 'red'
  ```
- Write unit tests for the `RandomColor` class, verify the following behaviors
  - When `newColor()` is called, a color should be return
  - When `newColor()` is called multiple times sequentially, the return colors should be different
- The test coverage of `RandomColor` class should be 100%
```
 PASS  src/challenge-06-spy-mock-return/RandomColor.test.js
  newColor()
    ✓ should return a color (4ms)
  when calling "newColor()" multiple times
    ✓ should return different colors (1ms)

----------------|----------|----------|----------|----------|-------------------|
File            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------|----------|----------|----------|----------|-------------------|
All files       |      100 |    66.67 |      100 |      100 |                   |
 RandomColor.js |      100 |      100 |      100 |      100 |                   |
 helper.js      |      100 |        0 |      100 |      100 |                 1 |
----------------|----------|----------|----------|----------|-------------------|
```

## Hint
- Use `jest.spyOn()`
- Use `mockReturnValueOnce()` to mock the `getRandomInt()` function
- Run the test with `--coverage` argument to generate the code coverage report