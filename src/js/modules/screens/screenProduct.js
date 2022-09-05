// import data from '../../../data.js';
// const { products } = data;

const ScreenProduct = {
  render: () => {
    return `<div>Product</div>`;
  },
};

export default ScreenProduct;

// const ScreenShop = {
//   renderShop: (products) => {
//     const discount = 0.1;

//     return `
//       <ul class="items__grid">
//         ${products
//           .map((product) => {
//             if (product.category !== 'fashion') return;

//             const details = {
//               saleIcon: `<span style="display:none;">on sale</span>`,
//               price: `<span class="price">$${product.price}</span>`,
//             };

//             if (product.isOnSale) {
//               const discountPrice = Math.floor(
//                 product.price - product.price * discount
//               );
//               details.saleIcon = `<span class="sale">on sale</span>`;
//               details.price = `
//               <span class="price">$${discountPrice}</span>
//               <span class="price--old">$${product.price}</span>
//               `;
//             }

//             return `
//           <li class="item">
//           <div class="item__img">
//             ${details.saleIcon}
//             <img
//               src="${product.images[0]}"
//               alt="${product.name}"
//             />
//           </div>
//           <h3 class="item__title"><a href="${product._id}">${product.name}</a></h3>
//           ${details.price}
//         </li>
//           `;
//           })
//           .join('\n')}
//       </ul>
//     `;
//   },
// };

// export default ScreenShop;
