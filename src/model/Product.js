const {Schema} = require('mongoose');

var productSchema = new Schema({
  sku: { type: String, index: true, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: String
});

module.exports = productSchema;