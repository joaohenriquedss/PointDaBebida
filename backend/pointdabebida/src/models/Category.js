const { Schema, model } = require('mongoose')


const CategorySchema = new Schema({
  name: { type: String, required: true, max: 100 },
}, {
  timestamps: true,
});

module.exports = model('Category', CategorySchema);