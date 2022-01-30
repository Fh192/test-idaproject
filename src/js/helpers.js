import { createProduct } from './createProduct';
import initialProducts from './initialProducts';

export function transformPrice(price) {
  return price.toLocaleString().replaceAll(',', ' ');
}

export function updateLocalStorage(products) {
  localStorage.setItem('products', JSON.stringify(products));
}

export function getProducts() {
  return JSON.parse(localStorage.getItem('products')) || initialProducts;
}

export function addProduct(product) {
  const productsList = document.querySelector('.products');

  const productElement = createProduct(product);
  productsList.prepend(productElement);
  animateProduct(productElement);

  updateLocalStorage([product, ...getProducts()]);
}

export function deleteProduct(id) {
  const products = getProducts().filter(product => product.id !== id);
  updateLocalStorage(products);
}

export function generateProductId() {
  return (getProducts()[0]?.id || 0) + 1;
}

export function renderProducts() {
  const products = getProducts();
  const productsList = document.querySelector('.products');

  productsList.innerHTML = '';

  products.forEach(product => {
    productsList.appendChild(createProduct(product));
  });
}

export function animateProduct(product, direction = 'normal') {
  product.animate(
    [
      { width: '0%', opacity: 0, transform: 'scale(0.65)' },
      { width: '100%', opacity: 1, transform: 'scale(1)' },
    ],
    {
      duration: 500,
      iterations: 1,
      easing: 'ease',
      direction,
    }
  );
}
