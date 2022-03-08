const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  aadhar: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  pincode: {
    type: String,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;
