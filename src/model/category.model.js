const mongoose = require('mongoose'); 

const categorySchema = new mongoose.Schema({
    itemId: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    title: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    picture: {
        type: mongoose.SchemaTypes.Array,
        required: true,
    },
    modelNum:{
        type: mongoose.SchemaTypes.Number,
        required: true,
    },
    categoryId: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    description:{
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    tags:{
        type: mongoose.SchemaTypes.Array,
        required: true,
    },
    date: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: new Date(),
    },
    manufacturer: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    vendorAddress: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    phoneNumber: {
        type: mongoose.SchemaTypes.Number,
    },
    quantity: {
        type: mongoose.SchemaTypes.Number,
        required:true,

    }
}); 

module.exports = mongoose.model('category', categorySchema);