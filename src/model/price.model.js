const mongoose = require('mongoose'); 

const priceSchema = new mongoose.Schema({
    priceHistory: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    vendorName: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    vendorAddress: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    discount: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    phoneNumber: {
        type: mongoose.SchemaTypes.Number,
        required: true,
    },
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: new Date(),
    }
}); 

module.exports = mongoose.model('price', priceSchema);