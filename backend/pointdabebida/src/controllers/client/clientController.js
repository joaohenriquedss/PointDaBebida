const Category = require('../models/Category.js');
const Product = require('../models/Product.js');


module.exports = {
  async indexCategory(req, res) {
    const categories = await Category.find();
    return res.json(categories);
  },
  async indexProduct(req, res) {
    const products = await Product.find();
    return res.json(products);
  },
  async indexProductFilter(req, res) {
    const { name } = req.body;
    var category = await Category.findOne({
      name: name,
    })
    if (!category) {
      return res.json({
        message: 'Categoria nao existe'
      }).status(404)
    }
    var products = await Product.find({
      category: category._id
    })
    return res.json(products)
  }
}