const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    email: String,
    gender: String,
    level: Number,
    EXP: Number
});

module.exports = mongoose.model('profile', profileSchema);