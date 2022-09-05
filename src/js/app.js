import { dropDown } from './modules/dropdown.js';
import ScreenHome from './modules/screens/screenHome.js';
import { ScreenProducts } from './modules/screens/screenProducts.js';
import ScreenProduct from './modules/screens/screenProduct.js';
// import data from '../data.js';
import Screen404 from './modules/screens/screen404.js';
// import { priceFilter } from './modules/slider.js';

dropDown();

const routes = {
  '/': ScreenHome,
  '/fashion': ScreenProducts,
  '/shoes': ScreenProducts,
  '/accessories': ScreenProducts,
  '/shop': ScreenProducts,
  '/products/:id': ScreenProduct,
};

// const { products } = data;

const routerProducts = () => {
  const request = window.location.pathname;
  const parseUrl = request.replace('.html', '');

  const screen = routes[parseUrl] ? routes[parseUrl] : Screen404;
  const itemsHome = document.querySelector('#products');

  if (parseUrl.slice(1) === 'shop') {
    itemsHome.innerHTML = screen.render();
  } else {
    itemsHome.innerHTML = screen.render(parseUrl.slice(1));
  }
};

const routerProduct = () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : `/`) +
    (request.id ? `/:id` : '') +
    (request.verb ? `/${request.verb}` : '');
  // const request = window.location.pathname;
  // const request = ;
  // console.log(window.location.hash);
  // const parseUrl = request.replace('.html', '');

  const screen = routes[parseUrl] ? routes[parseUrl] : Screen404;
  const itemsHome = document.querySelector('.main');
  console.log(screen);
  // itemsHome.innerHTML = routes.

  // if (parseUrl.slice(1) === 'shop') {
  //   itemsHome.innerHTML = screen.render();
  // } else {
  //   itemsHome.innerHTML = screen.render(parseUrl.slice(1));
  // }
};

window.addEventListener('load', routerProducts);
window.addEventListener('hashchange', routerProduct);
