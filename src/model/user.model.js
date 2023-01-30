const mongoose = require('mongoose'); 

const UserSchema = new mongoose.Schema({
    email: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    userName: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    password: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    status: {
        type: mongoose.SchemaTypes.String,
        default: "Pending"
    },
    forgotPassword: {
        type: mongoose.SchemaTypes.String,
    },
    role: {
        type: mongoose.SchemaTypes.String,
        enum: ["user", "engineer", "admin", "super_admin"],
        default: "user"
    },
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: new Date(),
    }
}); 

const Users = mongoose.model('users', UserSchema);

module.exports =   Users ;