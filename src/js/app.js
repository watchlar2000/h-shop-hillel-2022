import { dropDown } from './modules/dropdown.js';
import { ScreenHome } from './modules/screens/screenHome.js';
import { ScreenProducts } from './modules/screens/screenProducts.js';
import { ScreenProduct } from './modules/screens/screenProduct.js';
import { Screen404 } from './modules/screens/screen404.js';
import { addEventOnProductLinks, parseRequestUrl } from './modules/utils.js';
import { swiper } from './modules/slider.js';

// swiper();
dropDown();

const routes = {
  '/': ScreenHome,
  '/product/:id': ScreenProduct,
  '/fashion': ScreenProducts,
  '/shoes': ScreenProducts,
  '/accessories': ScreenProducts,
  '/shop': ScreenProducts,
};

const routerProducts = async () => {
  const request = window.location.pathname;
  const parseUrl = request.replace('.html', '');
  const itemsHome = document.querySelector('#products');
  const screen = routes[parseUrl] ? routes[parseUrl] : Screen404;
  itemsHome.innerHTML = await screen.render(parseUrl.slice(1));
  addEventOnProductLinks();
  return;
};
swiper();
const routerProduct = async () => {
  const parseUrl = parseRequestUrl();
  const itemsHome = document.querySelector('.main');
  const screen = routes['/product/:id'];

  const product = await screen.render(parseUrl.id);
  if (product === undefined) {
    itemsHome.innerHTML = await Screen404.render();
  } else {
    itemsHome.innerHTML = product;
  }
};

const url = window.location.pathname;

if (url.replace('.html', '').slice(1) === 'product') {
  document.addEventListener('DOMContentLoaded', routerProduct);
  window.addEventListener('hashchange', routerProduct);
} else {
  window.addEventListener('load', routerProducts);
}
