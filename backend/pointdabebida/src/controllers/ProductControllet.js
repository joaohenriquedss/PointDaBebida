const Category = require('../models/Category.js');
const Product = require('../models/Product.js');
var multer = require('multer');
const { update } = require('../models/Category.js');
var path = require('path')
var caminhoImagem = path.resolve('')
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
    if (req.file) {
      image_path = req.file.path;
    }
    const { name, price, category } = req.body;
    if (!name || !price || !category) {
      return res.json({
        message: 'Variavel undefined'
      })
    }
    else if (!image_path) {
      return res.json({
        message: 'Imagem undefined',

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
      image_path: image_path
    })
    return res.json({
      message: 'Produto Salvo',

    }).status(201)
  },
  async indexProductFilter(req, res) {
    const name  = req.params.category;

    var category = await Category.findOne({
      name: name,
    })
    console.log(category)
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
    const name  = req.params.name;
    console.log(name)
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
    if (!price && !category) {
      return res.json({
        message: 'Variavel undefined'
      })
    }
    try {
      const product_new = await Product.findByIdAndUpdate(product._id, {
        price,
      })
      return res.json({
        message: "Produto Modificado"
      }).status(201)
    } catch (error) {
      return res.json({
        message: error
      }).status(404)
    }
  }
}
