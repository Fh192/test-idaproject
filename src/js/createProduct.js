import deleteIcon from '../assets/delete.svg';
import { deleteProductListener } from './deleteProduct';
import { transformPrice } from './helpers';

export function createProduct(product) {
  const { id, title, description, price, imageUrl } = product;

  const productCard = document.createElement('li');
  productCard.classList.add('product');

  const productInner = document.createElement('div');
  productInner.classList.add('product__inner');

  const productImage = document.createElement('img');
  productImage.src = imageUrl;
  productImage.classList.add('product__image');

  const productTitle = document.createElement('h3');
  productTitle.classList.add('product__title');
  productTitle.innerHTML = title;

  const productDescription = document.createElement('p');
  productDescription.classList.add('product__description');
  productDescription.innerHTML = description;
  productDescription.title = description;

  const productPrice = document.createElement('b');
  productPrice.classList.add('product__price');
  productPrice.innerHTML = `${transformPrice(price)} руб.`;

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = `<img src="${deleteIcon}"/>`;
  deleteButton.classList.add('product__deleteButton');
  deleteButton.addEventListener(
    'click',
    deleteProductListener.bind(null, productCard, id)
  );

  productInner.append(productTitle, productDescription, productPrice);
  productCard.append(deleteButton, productImage, productInner);

  return productCard;
}
