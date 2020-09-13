const Category = require('../models/Category.js');
const Product = require('../models/Product.js')
const fs = require('fs')
module.exports = {

  async index(req, res) {
    const categories = await Category.find();
    return res.json(categories);
  },

  async store(req, res) {
    const { name } = req.body;
    var category = await Category.findOne({
      name: name,
    })
    if (category) {
      return res.json({
        message: 'Categoria já existe'
      }).status(404)
    }
    const categories = await Category.create({
      name,
    })
    return res.json(categories)
  },

  async destroy(req, res) {
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
    products.forEach(async element => {
      await destroyImage(element.image_path)
      await Product.findByIdAndDelete(element._id)

    });

    const response = await Category.findByIdAndDelete(category._id)
    return res.json('response')
  }
}
async function destroyImage(image_path){
  fs.unlink(image_path, async (err) => {
    if (err) throw err;
    console.log(image_path + ' was deleted');
  })
}
