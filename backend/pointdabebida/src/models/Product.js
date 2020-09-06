const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  price: { type: Number, max: 10 },
  category : {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
}, {
  timestamps: true,
});

module.exports = model('Product', ProductSchema);