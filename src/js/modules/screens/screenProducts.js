import { fetchProducts, fetchByCategory } from '../utils.js';
import { countDiscount } from '../utils.js';

export const ScreenProducts = {
  async render(category) {
    let products;
    if (category === 'shop') {
      products = await fetchProducts();
    } else {
      products = await fetchByCategory(category);
    }

    return `
      <ul class="items__grid products__grid">
        ${products
          .map((product) => {
            if (category !== 'shop' && product.category !== `${category}`)
              return;

            const details = {
              saleIcon: `<span style="display:none;">sale</span>`,
              price: `<span class="price">$${product.price}</span>`,
            };

            if (product.isOnSale) {
              const discountPrice = countDiscount(product.price);

              details.saleIcon = `<span class="sale">on sale</span>`;
              details.price = `       
              <span class="price">$${discountPrice}</span>
              <span class="price--old">$${product.price}</span>
              `;
            }

            return `
          <li class="item" data-product='${product._id}'>
          <div class="item__img">
            ${details.saleIcon}
            <img
              src="${product.images[0]}"
              alt="${product.name}"
            />
          </div>
          <h3 class="item__title"><a href="/product.html#${product._id}" class="product__link">${product.name}</a></h3>
          ${details.price}
        </li> 
          `;
          })
          .join('\n')}
      </ul>
    `;
  },
};
