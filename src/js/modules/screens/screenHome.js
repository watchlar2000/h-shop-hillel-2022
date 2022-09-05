import data from '../../../data.js';
const { products } = data;

const ScreenHome = {
  renderOnSale() {
    const discount = 0.1;

    return `
      <ul class="items__grid">
        ${products
          .map((product) => {
            if (product.isOnSale !== true) return;
            const discountPrice = Math.floor(
              product.price - product.price * discount
            );
            return `
          <li class="item" data-product='${product._id}'>
          <div class="item__img">
          <span class="sale">on sale</span>
            <img
              src="${product.images[0]}"
              alt="${product.name}"
            />
          </div>
          <h3 class="item__title"><a href="/#/product/${product._id}">${product.name}</a></h3>
          <span class="price">$${discountPrice}</span>
          <span class="price--old">$${product.price}</span>
        </li> 
          `;
          })
          .join('\n')}
      </ul>
    `;
  },
  renderNewArrival() {
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
        <h3 class="item__title"><a href="/#/product/${product._id}">${product.name}</a></h3>
        <span class="price">$${product.price}</span>
      </li> 
        `;
          })
          .join('\n')}
      </ul>
    `;
  },
  render() {
    return `
    <div class="products__homepage">
    <h3 class="items__title">On sale</h3>
    <div class="items__homepage">
      ${this.renderOnSale()}
    </div>
  </div>
  <div class="products__homepage">
    <h3 class="items__title">New arrival</h3>
    <div class="items__homepage">
    ${this.renderNewArrival()}
    </div>
  </div>
    `;
  },
};

export default ScreenHome;
