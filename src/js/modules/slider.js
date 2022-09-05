import noUiSlider from 'nouislider';

export function priceFilter() {
  const slider = document.querySelector('#slider__price-filter');

  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
  });
}

// priceFilter();
