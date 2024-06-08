const mongoose = require('mongoose');

const modelName = 'users';

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
});

const model = mongoose.model(modelName, schema);

module.exports = model;