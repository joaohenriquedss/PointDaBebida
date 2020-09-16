const Category = require('../models/Category.js');
const Product = require('../models/Product.js');
var multer = require('multer');
const { update } = require('../models/Category.js');
var upload = multer({ dest: 'uploads/' })
const fs = require('fs')

module.exports = {
  async index(req, res) {
    const { name } = req.body;
    if (typeof name != "undefined") {
      const product = await Product.find({
        name: name
      });
      return res.json(product);
    }
    const product = await Product.find();
    return res.json(product);
  },

  async store(req, res) {
    let image_path;
    if(req.file) {
      image_path = req.file.path;
    }
    const { name, price, category } = req.body;

    if(!name || !price || !category || !image_path) {
      return res.json({
        message : 'Variavel undefined'
      })
    }
    var category_id = await Category.findOne({
      name: category,
    })

    var verify = await Product.findOne({
      name: name
    })
    if (verify != null) {
      return res.json({
        message: "Produto já existe"
      })
    }
    const product = await Product.create({
      name,
      price,
      category: category_id._id,
      image_path
    })
    return res.json(product).status(201)
  },
  async indexProductFilter(req, res) {
    const { name } = req.body;
    var category = await Category.findOne({
      name: name,
    })
    if (!category) {
      return res.json({
        message: 'Categoria nao existe'
      })
    }
    var products = await Product.find({
      category: category._id
    })
    return res.json(products)
  },
  async destroy(req, res) {
    const { name } = req.body;
    var product = await Product.findOne({
      name: name,
    })
    if (product === null) {
      return res.json({
        message: "Produto não encontrado"
      }).status(404)
    }
    fs.unlink(product.image_path, async (err) => {
      if (err) throw err;
      console.log(product.image_path + ' was deleted');
    });
    const response = await Product.findByIdAndDelete(product._id)
    return res.json(response)
  },

  async update(req, res) {
    const { name, price, category } = req.body;
    const product = await Product.findOne({
      name: name
    });
    const product_new = await Product.findByIdAndUpdate(product._id, {
      name,
      price,
    })
    return res.json(product_new)
  }
}
