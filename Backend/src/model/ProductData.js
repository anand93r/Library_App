const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:admin@libraryapp.is8pbwr.mongodb.net/LibraryDB?retryWrites=true&w=majority");
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