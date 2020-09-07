const User = require('../models/User.js');
const { exists } = require('../models/User.js');

module.exports = {
  async index(req, res) {
    const users = await User.find();
    return res.json(users);
  },
  async store(req, res) {
    const { name, email, password } = req.body;
    var users = await User.find({
      name: name,
    })
    if (users.length > 0) {
      return res.json({
        message: 'Usuario já existe'
      })
    }
    const user = await User.create({
      name,
      email,
      password
    })
    return res.json(user)
  },
  async destroy(req, res) {
    const { name } = req.body;
    var users = await User.find({
      name: name,
    })
    if (users.length <= 0) {
      return res.json({
        message : 'Usuario nao existe'
      })
    }
    const user = await User.findByIdAndDelete(users[0]._id)
    return res.json(user);
  },
}