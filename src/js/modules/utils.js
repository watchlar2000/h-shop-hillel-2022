export function countDiscount(price) {
  const DISCOUNT = 0.1;
  return Math.floor(price - price * DISCOUNT);
}

export const parseRequestUrl = () => {
  const url = document.location.hash.toLocaleLowerCase();
  // console.log(url.split('')[1]);
  const request = url.split('/');
  // console.log(request);
  return {
    id: request[0].slice(1),
    // resource: request[1],
    // id: request[2],
    // verb: request[3],
  };
};

export async function fetchProducts() {
  const response = await fetch('http://localhost:5000/api/products', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response || !response.ok) {
    return `Bad request...`;
  }

  return response.json();
}

export async function fetchByCategory(category) {
  const response = await fetch(
    `http://localhost:5000/api/products/${category}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (!response || !response.ok) {
    return `Bad request...`;
  }

  return response.json();
}

export async function fetchById(id) {
  const response = await fetch(`http://localhost:5000/api/products/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response || !response.ok) {
    console.log('Bad request');
    return undefined;
  }

  return response.json();
}

export function addEventOnProductLinks() {
  const productLinks = document.querySelectorAll('.item__img');
  productLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.closest('[data-product]').dataset.product;
      console.log(productId);
    });
  });
  // console.log(products);
}
