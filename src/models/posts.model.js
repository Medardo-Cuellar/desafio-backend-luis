const mongoose = require('mongoose');

const modelName = 'posts';

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
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