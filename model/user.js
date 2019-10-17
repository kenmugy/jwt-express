const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = model('User', userSchema);
