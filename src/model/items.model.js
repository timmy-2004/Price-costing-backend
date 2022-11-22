const mongoose = require('mongoose'); 

const itemSchema = new mongoose.Schema({
    image: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    item: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    price: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    date: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: new Date(),
    },
    vendorName: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    vendorAddress: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    phoneNumber: {
        tyoe: mongoose.SchemaTypes.Number
    }
}); 

module.exports = mongoose.model('item', itemSchema);