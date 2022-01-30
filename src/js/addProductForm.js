import { createAlert } from './alert.js';
import { addProduct, generateProductId, transformPrice } from './helpers.js';

const form = document.forms.addProduct;
const submitButton = form.querySelector('button[type="submit"]');
const priceInput = document.getElementById('price');
const titleInput = document.getElementById('title');
const imageUrlInput = document.getElementById('imageUrl');

function validateForm() {
  let isValid = true;
  const fields = [priceInput, titleInput, imageUrlInput];

  fields.forEach(field => {
    if (!field.validity.valid) {
      isValid = false;
    }
  });

  return isValid;
}

function validateInput(inputElement, errorElement) {
  if (!inputElement.validity.valid) {
    if (inputElement.type === 'url' && inputElement.value) {
      errorElement.innerHTML = 'Неверный URL-адрес';
    } else {
      errorElement.innerHTML = 'Поле является обязательным';
    }

    inputElement.style.border = '1px solid #ff8484';
  } else {
    errorElement.innerHTML = '';
    inputElement.style.border = '1px solid #fff';
  }

  if (validateForm()) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const { title, description, price, imageUrl } = e.target.elements;

  const product = {
    id: generateProductId(),
    title: title.value,
    description: description.value,
    imageUrl: imageUrl.value,
    price: Number(price.value.replaceAll(/\s/g, '')),
  };

  addProduct(product);

  form.reset();
  submitButton.disabled = true;

  createAlert('Товар успешно добавлен!');
});

form.addEventListener('input', e => {
  const inputElement = e.target;
  const errorElement = document.querySelector(
    `#${e.target.id} + .field__error-message`
  );
  if (errorElement) {
    validateInput(inputElement, errorElement);
  }
});

priceInput.addEventListener('input', e => {
  const value = +e.target.value.replaceAll(/[^0-9]/g, '') || '';
  e.target.value = transformPrice(value);
});
