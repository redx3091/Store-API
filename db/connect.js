const mongoose = require('mongoose');

const connectDB = (url) => {
  mongoose.connect(url, {
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
