const Category = require('../models/Category.js');

module.exports = {
  async index(req, res) {
    const categories = await Category.find();
    return res.json(categories);
  },
  
  async store(req, res) {
    const { name } = req.body;
    const categories = await Category.create({
      name,
    })
    return res.json(categories)
  },
  async destroy(req, res) {
    const { name } = req.body;
    return res.json()
  }
}