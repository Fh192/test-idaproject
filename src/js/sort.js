import { getProducts, renderProducts, updateLocalStorage } from './helpers';

const select = document.getElementById('sortProducts');

export function sortProducts(sortBy) {
  let products = getProducts();

  if (sortBy === 'default') {
    products.sort((a, b) => b.id - a.id);
  } else if (sortBy === 'minToMax') {
    products.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'maxToMin') {
    products.sort((a, b) => b.price - a.price);
  }

  updateLocalStorage(products);
}

select.addEventListener('change', e => {
  sortProducts(e.target.value);
  renderProducts();
});
