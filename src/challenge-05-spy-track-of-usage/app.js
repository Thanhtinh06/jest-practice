import { updateProduct } from './service';
import Popup from './Popup';

export const doUpdateProduct = product => {
  return updateProduct(product)
    .then(() => Popup.toast('The product is updated'))
    .catch(err => Popup.showError(err.message));
};
