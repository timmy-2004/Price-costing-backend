const mongoose = require('mongoose'); 

const UserSchema = new mongoose.Schema({
    email: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    password: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    forgotPassword: {
        type: mongoose.Schema
    },
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: new Date(),
    }
}); 

module.exports = mongoose.model('users', UserSchema);