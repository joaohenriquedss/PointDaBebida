const User = require('../models/User.js');

module.exports = {
  async index(req, res) {
    const users = await User.find();
    return res.json(users);

  },
  async store(req, res) {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password
    })
    return res.json(user)
  },
  async destroy(req,res) {
    const {name} = req.body;
    return res.json()
  }
}