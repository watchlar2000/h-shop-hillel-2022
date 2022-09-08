import { fetchById } from '../utils.js';
import { swiper } from '../slider.js';
import { countDiscount } from '../utils.js';

export const ScreenProduct = {
  async render(id) {
    const product = await fetchById(id);
    // console.log(product.colorsAvailable);

    if (product !== undefined) {
      setBreadcrump(product);
      setBreadcrumpLink(product);
      const isOnSale = {
        icon: '',
        price: '',
      };
      if (product.isOnSale) {
        isOnSale.icon = `<span class="sale">sale</span>`;
        isOnSale.price = `<span class="price--old">$${countDiscount(
          product.price
        )}</span>`;
      }

      const slider = generateSlider(product);

      return `      
      <div class="product">
      <div class="product__header">
        ${isOnSale.icon}
        <h2 class="product__header--title">${product.name}</h2>
        <p class="product__sku">SKU: ${product.sku}</p>
        ${generateRating(product)}
      </div>

      ${slider}

      <div class="order">
        <div class="order__price">
          <span class="price">$${product.price}</span>
          ${isOnSale.price}
        </div>
        <div class="order__info">
          <form action="" class="order__form">
            <div class="relative">
              <div
                class="order__form--color order__grid grey-line order__padding-top"
              >
                <label for="color" class="label">Color</label>
                ${generateColors(product)}
              </div>
            </div>

            <div class="order__form--size order__grid">
              <label for="size" class="label">Size</label>
              ${generateSizes(product)}
            </div>
            <div class="relative">
              <div class="grey-line order__grid order__padding-top">
                <input
                  type="number"
                  value="1"
                  min="1"
                  class="order__amount"
                />
                <button type="submit" class="btn btn--order">
                  Add to cart
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="testimonials">
        <div class="testimonials__controls">
          <button class="btn testimonials__btn btn--description">
            Description
          </button>
          <button class="btn testimonials__btn btn--reviews">
            Reviews <span class="reviews"></span>
          </button>
        </div>
        <div class="testimonials__content">
          <p class="testimonials__content--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            voluptatibus soluta laudantium totam perspiciatis explicabo!
          </p>
          <!-- <p class="testimonials__content--reviews">Lorem, ipsum dolor.</p> -->
        </div>
      </div>
    </div>   
      `;
    }
    return undefined;
  },
};

function setBreadcrump(product) {
  const breadcrump = document.querySelector('.breadcrumps__product');
  const category = product.category;
  breadcrump.textContent = category.charAt(0).toUpperCase() + category.slice(1);
}

function setBreadcrumpLink(product) {
  const productLink = document.querySelector('.products__link');
  const category = product.category;
  productLink.setAttribute('href', `./${category}.html`);
}

function generateColors(product) {
  const { colorsAvailable: colors } = product;
  const options = colors
    .map(
      (color) =>
        `<option value="${color}">${capitalizeFirstLetter(color)}</option>`
    )
    .join('');
  return `
    <select name="color" id="color">                    
      ${options}
    </select>
  `;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateSizes(product) {
  const { sizesAvailable: sizes } = product;

  if (sizes !== undefined) {
    const options = sizes
      .map((size) => `<option value="${size}">${size}</option>`)
      .join('');
    return `
      <select name="size" id="size">                    
        ${options}
      </select>
    `;
  }

  return `
    <select name="size" id="size" disabled>                    
    <option value="one-size">One size</option>
    </select>
`;
}

function generateRating(product) {
  const { rating } = product;
  const maxStars = 5;
  let stars = '';
  for (let i = 1; i <= maxStars; i++) {
    if (i <= rating) {
      stars += `<i class="fa fa-star rating rating--full"></i>`;
    } else {
      stars += `<i class="fa fa-star rating"></i>`;
    }
  }
  console.log(stars);
  return `
    <div class="product__rating">
      ${stars}
    </div>
  `;
}

function generateSlider(product) {
  const { images } = product;
  return `
  <div class="swiper mySwiper>
    <div class="swiper-wrapper" id="swiper-wrapper">
      <div class="swiper-slide" style="background-image: url('${images[0]}')"></div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <div class="swiper-pagination"></div>
  </div> 
  `;

  // <div class="swiper mySwiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
  //   <div class="swiper-wrapper" id="swiper-wrapper">
  //     <div class="swiper-slide ">Slide 1</div>
  //     <div class="swiper-slide swiper-slide-active">Slide 2</div>
  //     <div class="swiper-slide swiper-slide-next">Slide 3</div>
  //   </div>
  //   <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
  //     <span class="swiper-pagination-bullet swiper-preview"></span>
  //     <span
  //       class="swiper-pagination-bullet swiper-preview swiper-pagination-bullet-active"
  //       aria-current="true"
  //     ></span>
  //     <span class="swiper-pagination-bullet swiper-preview"></span>
  //   </div>
  // </div>;

  // return `
  //       <div
  //         class="swiper mySwiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
  //       >
  //         <div
  //           class="swiper-wrapper"
  //           id="swiper-wrapper"
  //           aria-live="polite"
  //           style="transition-duration: 0ms"
  //         >
  //           <div
  //             class="swiper-slide swiper-slide-prev"
  //             style="width: 554px"
  //             role="group"
  //             aria-label="1 / 3"
  //           >
  //             Slide 1
  //           </div>
  //           <div
  //             class="swiper-slide swiper-slide-active"
  //             style="width: 554px"
  //             role="group"
  //             aria-label="2 / 3"
  //           >
  //             Slide 2
  //           </div>
  //           <div
  //             class="swiper-slide swiper-slide-next"
  //             style="width: 554px"
  //             role="group"
  //             aria-label="3 / 3"
  //           >
  //             Slide 3
  //           </div>
  //         </div>
  //         <div
  //           class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
  //         >
  //           <span
  //             class="swiper-pagination-bullet swiper-preview"
  //             tabindex="0"
  //           ></span
  //           ><span
  //             class="swiper-pagination-bullet swiper-preview swiper-pagination-bullet-active"
  //             tabindex="0"
  //             aria-current="true"
  //           ></span
  //           ><span
  //             class="swiper-pagination-bullet swiper-preview"
  //             tabindex="0"
  //           ></span>
  //         </div>
  //         <span
  //           class="swiper-notification"
  //           aria-live="assertive"
  //           aria-atomic="true"
  //         ></span
  //         ><span
  //           class="swiper-notification"
  //           aria-live="assertive"
  //           aria-atomic="true"
  //         ></span>
  //       </div>
  // `;
}

/*
<div class="product">
          <div class="product__header">
            <span class="sale">sale</span>
            <h2 class="product__header--title">T-Shirt</h2>
            <p class="product__sku">SKU: 345643643</p>
            <div class="product__rating">
              <span><i class="fa fa-star rating"></i></span>
              <span><i class="fa fa-star rating"></i></span>
              <span><i class="fa fa-star rating"></i></span>
              <span><i class="fa fa-star rating"></i></span>
              <span><i class="fa fa-star-half-o rating"></i></span>
            </div>
          </div>

          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
            </div>
            <div class="swiper-pagination"></div>
          </div>

          <div class="order">
            <div class="order__price">
              <span class="price">$100</span>
              <span class="price--old">$125</span>
            </div>
            <div class="order__info">
              <form action="" class="order__form">
                <div class="relative">
                  <div
                    class="order__form--color order__grid grey-line order__padding-top"
                  >
                    <label for="color" class="label">Color</label>
                    <select name="color" id="color">
                      <option value="green">Green</option>
                      <option value="beige">Beige</option>
                    </select>
                  </div>
                </div>

                <div class="order__form--size order__grid">
                  <label for="size" class="label">Size</label>
                  <select name="size" id="size">
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                  </select>
                </div>
                <div class="relative">
                  <div class="grey-line order__grid order__padding-top">
                    <input
                      type="number"
                      value="1"
                      min="1"
                      class="order__amount"
                    />
                    <button type="submit" class="btn btn--order">
                      Add to cart
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="testimonials">
            <div class="testimonials__controls">
              <button class="btn testimonials__btn btn--description">
                Description
              </button>
              <button class="btn testimonials__btn btn--reviews">
                Reviews <span class="reviews"></span>
              </button>
            </div>
            <div class="testimonials__content">
              <p class="testimonials__content--description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                voluptatibus soluta laudantium totam perspiciatis explicabo!
              </p>
              <!-- <p class="testimonials__content--reviews">Lorem, ipsum dolor.</p> -->
            </div>
          </div>
        </div>
        */
