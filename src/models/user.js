const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    //nome 
    name: {
        type: String,
        require: true,
    },
    //email
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    //senha
    password: {
        type: String,
        required: true,
        select: false,
    },
    //datar dia e hora que os dados foram armazenados
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const User = mongoose.model('User', UserSchema)

module.exports = User