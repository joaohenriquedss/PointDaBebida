const Product = require('../models/Product.js');
var multer  = require('multer')
var upload = multer({dest: 'uploads/'})

module.exports = {
  async index(req, res) {
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

  async destroy(req, res) {
    const { name } = req.body;
    return res.json()
  }
}