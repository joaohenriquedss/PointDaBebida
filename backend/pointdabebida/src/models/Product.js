const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  price: { type: Number, max: 10000 },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  image_path : {type: String }
}, {
  timestamps: true,
});

module.exports = model('Product', ProductSchema);
