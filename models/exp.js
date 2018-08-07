const mongoose = require('mongoose');

const newExp = new mongoose.Schema({
    levels: {
        type: Array,
    },
    description: {
        type: String,
    }
    
});

module.exports = mongoose.model('exp', newExp);