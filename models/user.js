const mongoose = require("mongoose");  
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

const userSchema = new Schema({  
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function(next) {
    // const user = this;
    if (!this.isModified('password')) return next();
    bcrypt.hash(this.password, 10, (err, hash) =>{
        if (err) return next(err);
        this.password = hash;
        next();
    })
})

userSchema.methods.checkPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err);
        callback(null, isMatch);
    })
}

userSchema.methods.withoutPassword = function() {
    const user = this.toObject();
    delete user.password;
    return user;
}

module.exports = mongoose.model('User', userSchema); 