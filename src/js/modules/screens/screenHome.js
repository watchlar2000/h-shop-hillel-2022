import { fetchProducts } from '../utils.js';
import { countDiscount } from '../utils.js';

export const ScreenHome = {
  async renderOnSale() {
    const products = await fetchProducts();

    return `
      <ul class="items__grid">
        ${products
          .map((product) => {
            if (product.isOnSale !== true) return;
            const discountPrice = countDiscount(product.price);
            return `
          <li class="item" data-product='${product._id}'>
          <div class="item__img">
          <span class="sale">sale</span>
            <img
              src="${product.images[0]}"
              alt="${product.name}"
            />
          </div>
          <h3 class="item__title"><a href="./product.html#${product._id}" class="product__link">${product.name}</a></h3>
          <span class="price">$${discountPrice}</span>
          <span class="price--old">$${product.price}</span>
        </li> 
          `;
          })
          .join('\n')}
      </ul>
    `;
  },
  async renderNewArrival() {
    const products = await fetchProducts();

    return `
      <ul class="items__grid">
        ${products
          .map((product) => {
            if (product.isNewArrival !== true) return;
            return `
        <li class="item" data-product='${product._id}'>
        <div class="item__img">
          <img
            src="${product.images[0]}"
            alt="${product.name}"
          />
        </div>
        <h3 class="item__title"><a href="./product.html#${product._id}" class="product__link">${product.name}</a></h3>
        <span class="price">$${product.price}</span>
      </li> 
        `;
          })
          .join('\n')}
      </ul>
    `;
  },
  async render() {
    const onSaleData = await this.renderOnSale();
    const newArrivalData = await this.renderNewArrival();

    return `
    <div class="products__homepage">
    <h3 class="items__title">On sale</h3>
    <div class="items__homepage">
      ${onSaleData}
    </div>
  </div>
  <div class="products__homepage">
    <h3 class="items__title">New arrival</h3>
    <div class="items__homepage">
    ${newArrivalData}
    </div>
  </div>
    `;
  },
};
