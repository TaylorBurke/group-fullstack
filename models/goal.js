const mongoose = require('mongoose');

const newGoal = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    milestone: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    difficulty: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        required: true
    }

});

module.exports = mongoose.model('goal', newGoal);