const Category = require('../models/Category.js');
const Product = require('../models/Product.js');
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

module.exports = {
  async index(req, res) {
    const { name } = req.body;
    if(name) {
      const product = await Product.find({
        name:name
      });
    }
    const product = await Product.find();
    return res.json(product);
  },
  async store(req, res) {
    const image_path = req.file.path;
    const { name, price, category } = req.body;
    const product = await Product.create({
      name,
      price,
      category,
      image_path
    })
    return res.json(product)
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
  },

  async destroy(req, res) {
    const { name } = req.body;
    return res.json()
  }
}
