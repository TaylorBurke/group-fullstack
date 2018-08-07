const mongoose = require('mongoose');

const newUser = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    passwprd: {
        type: String,
        required: true
    },
   email: {
       type: String,
       required: true
   },
   gender: {
       type: String,
       required: false
   },
   EXP: {
       type: Number,
       required: true
   }
});

module.exports = mongoose.model('user', newUser);