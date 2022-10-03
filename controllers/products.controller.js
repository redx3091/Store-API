const Product = require('../models/products.model');

const getAllProductsStatic = async (req, res) => {
  await Product.find({})
    .sort('-name price')
    .then((products) =>
      res.status(200).json({ products, nbHits: products.length })
    )
    .catch((err) => res.status(500).json(err));
  //res.status(200).json({ products });
};
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }
  console.log(queryObject);
  let result = Product.find(queryObject);
  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  } else {
    result = result.sort('createAt');
  }
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
