import { doUpdateProduct } from "./app";
import Popup from "./Popup";
import { updateProduct } from "./service";

jest.mock("./service", () => ({
  updateProduct: jest.fn(),
}));

jest.mock("./Popup", () => ({
  toast: jest.fn(),
  showError: jest.fn(),
}));

describe("doUpdateProduct", () => {
  describe("when updating successfully", () => {
    it("should show a popup message", async () => {
      updateProduct.mockResolvedValue();

      await doUpdateProduct({});

      expect(Popup.toast).toHaveBeenCalledWith("The product is updated");
    });
  });

  describe("when updating failed", () => {
    it("should show the error", async () => {
      const errorMessage = "Update failed";
      updateProduct.mockRejectedValue(new Error(errorMessage));

      await doUpdateProduct({});

      expect(Popup.showError).toHaveBeenCalledWith(errorMessage);
    });
  });
});
