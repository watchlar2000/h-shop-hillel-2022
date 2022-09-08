import data from '../data.js';

const productsAll = (req, res) => {
  res.json(data.products);
};

const productsFashion = (req, res) => {
  const prodFashion = sortProducts('fashion');
  res.json(prodFashion);
};

const productsShoes = (req, res) => {
  const prodShoes = sortProducts('shoes');
  res.json(prodShoes);
};

const productsAccessories = (req, res) => {
  const prodAccessories = sortProducts('accessories');
  res.json(prodAccessories);
};

const productSpecific = (req, res) => {
  try {
    const { id } = req.params;
    const prodSpecific = data.products.find(
      (product) => product._id === Number(id)
    );
    if (!prodSpecific) {
      throw new Error();
    }
    res.json(prodSpecific);
  } catch (err) {
    res.status(404).json({ message: 'bad request' });
  }
};

function sortProducts(category) {
  return data.products.filter((product) => product.category === category);
}

export {
  productsAll,
  productsFashion,
  productsShoes,
  productsAccessories,
  productSpecific,
};
