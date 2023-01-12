const mongoose = require('mongoose'); 

const categorySchema = new mongoose.Schema({
    categoryId: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    name:{
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    label:{
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    unit:{
        type: mongoose.SchemaTypes.Number,
        required: true,
    },
    date: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: new Date(),
    }
}); 

module.exports = mongoose.model('category', categorySchema);