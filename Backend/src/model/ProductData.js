const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/LibraryDB");
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    productCode: Number,
    productName: String,
    availability: String,
    price: String,
    rating: String,
    imageURL: String
});

var Productdata = mongoose.model('books', ProductSchema);
module.exports = Productdata;