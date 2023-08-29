import { Counter } from "./Counter";
import { fireEvent, getByText } from "@testing-library/dom";

beforeEach(() => {
  // Create a container div as a placeholder for rendering the Counter
  const container = document.createElement("div");
  container.id = "value-counter";
  document.body.appendChild(container);
});

describe("Counter", () => {
  it("should render the given value", () => {
    const initialValue = 1;
    const counter = new Counter({
      selector: "#value-counter",
      value: initialValue,
    });

    counter.render();

    const valueElement = document.querySelector(".js-value");
    expect(valueElement.textContent).toBe(initialValue.toString());
  });

  describe('when clicking the "▲" arrow button', () => {
    it("should increase the value from 1 to 2", () => {
      const counter = new Counter({
        selector: "#value-counter",
      });

      counter.render();

      const increaseButton = document.querySelector(".js-increase-btn");
      const valueElement = document.querySelector(".js-value");

      fireEvent.click(increaseButton);
      expect(valueElement.textContent).toBe("2");

      fireEvent.click(increaseButton);
      expect(valueElement.textContent).toBe("3");
    });
  });

  describe('when clicking the "▼" arrow button', () => {
    it("should decrease the value from 3 to 2", () => {
      const counter = new Counter({
        selector: "#value-counter",
      });

      counter.render();

      const decreaseButton = document.querySelector(".js-decrease-btn");
      const valueElement = document.querySelector(".js-value");

      fireEvent.click(decreaseButton);
      expect(valueElement.textContent).toBe("2");
    });
  });
});
