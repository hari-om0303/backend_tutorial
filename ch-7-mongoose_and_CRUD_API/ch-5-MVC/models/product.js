const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {type : String, required: true, unique: true}, 
    description: {type: String, required: true}, //string is short for {type: String}
    price: {type: Number, required: true , min:[0, 'Price cannot be negative']}, // with validation
    discountPercentage: {type: Number, min:0, max:100}, // with validation
    rating: { type: Number , min:[0 , 'greater than or equal to 0'], max:[5,'less then equal to 5'] }, // with validation
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String]
});

exports.product = mongoose.model('Product', productSchema);   