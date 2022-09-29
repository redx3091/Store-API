const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name must be provided'],
  },
  price: {
    type: Number,
    required: [true, 'product pice must be provided'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'lddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported',
    },
    //enum: ['ikea', 'lddy', 'caressa', 'marcos'],
  },
});

module.exports = mongoose.model('Product', productSchema);
