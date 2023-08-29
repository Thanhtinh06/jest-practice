import RandomColor from "./RandomColor";

describe("newColor()", () => {
  it("should return a color", () => {
    const randomColorGenerator = new RandomColor();
    const color = randomColorGenerator.newColor();
    expect(color).toMatch(/red|green|blue/);
  });
});

describe('when calling "newColor()" multiple times', () => {
  it("should return different colors", () => {
    const randomColorGenerator = new RandomColor();
    const colors = new Set();

    for (let i = 0; i < 100; i++) {
      const color = randomColorGenerator.newColor();
      colors.add(color);
    }

    expect(colors.size).toBeGreaterThan(1);
  });
});
