const mongoose = require('mongoose'); 

const priceSchema = new mongoose.Schema({
    item: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    price: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: new Date(),
    }
}); 

module.exports = mongoose.model('price', priceSchema);