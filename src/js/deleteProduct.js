import { createAlert } from './alert';
import { animateProduct, deleteProduct } from './helpers';

export function deleteProductListener(productCard, id) {
  animateProduct(productCard, 'reverse');

  setTimeout(() => {
    deleteProduct(id);
    productCard.remove();
    createAlert('Товар успешно удален!');
  }, 490);
}
