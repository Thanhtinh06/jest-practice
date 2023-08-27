# Challenge

- Write unit test for the `doUpdateProduct()` function of `app.js` module, verify the following behaviors
  - When `doUpdateProduct()` completes successfully, the `Popup.toast()` should be called
  - When `doUpdateProduct()` completes unsuccessfully, the `Popup.showError()` should be called

## Hint

- Use `mockResolvedValue()`, `mockRejectedValue()` to mock the function of the `service.js`
- Use `jest.spyOn()` to track the function call of `Popup`'s functions
