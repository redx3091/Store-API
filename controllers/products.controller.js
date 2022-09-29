const Product = require('../models/products.model');

const getAllProductsStatic = async (req, res) => {
  await Product.find({ name: 'vase table' })
    .then((products) =>
      res.status(200).json({ products, nbHits: products.length })
    )
    .catch((err) => res.status(500).json(err));
  //res.status(200).json({ products });
};
const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: 'products  route' });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
