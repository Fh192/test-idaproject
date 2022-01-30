import '../styles/index.scss';
import { renderProducts } from './helpers';
import { sortProducts } from './sort';

(function init() {
  sortProducts('default');
  renderProducts();
})();
