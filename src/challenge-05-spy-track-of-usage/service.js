export const updateProduct = product => {
  /* pseudo code
  return productRepo.getById(product.id).then(existingProduct => {
    if (!existingProduct) {
      throw new Error('Product not found');
    }
    productRepo.update(product);
  });
  */
  return Promise.reject(new Error('Not implemented yet'));
};
