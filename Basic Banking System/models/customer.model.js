// name email curr balance
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: String,
    email: String,
    balance: Number
});

module.exports = mongoose.model("Customer", customerSchema);