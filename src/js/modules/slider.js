// import noUiSlider from 'nouislider';

// export function priceFilter() {
//   const slider = document.querySelector('#slider__price-filter');

//   noUiSlider.create(slider, {
//     start: [20, 80],
//     connect: true,
//     range: {
//       min: 0,
//       max: 100,
//     },
//   });
// }

// priceFilter();

// const slider = new Swiper('.mySwiper', {
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (index + 1) + '</span>';
//     },
//   },
// });

export function swiper() {
  console.log('swiper created');
  const swiper = new Swiper('.mySwiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className} swiper-preview"></span>`;
      },
    },
  });

  console.log(swiper);

  // console.log('swiper created');
  // return new Swiper('.mySwiper', {
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     renderBullet: function (index, className) {
  //       return '<span class="' + className + '">' + (index + 1) + '</span>';
  //     },
  //   },
  // });
}

// renderBullet: function (img, className) {
//   img.map((preview) => {
//     return `<span class="${className} swiper-preview" style="background: purple;"></span>`;
//   });
// },
