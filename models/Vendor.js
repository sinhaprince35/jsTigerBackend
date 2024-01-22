const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: "String",
  accountNo: "Number",
  bankName: "String",
  address1: "String",
  address2: "String",
  city: "String",
  country: "String",
  zipCode: "Number"
});

module.exports = mongoose.model("Users", userSchema);