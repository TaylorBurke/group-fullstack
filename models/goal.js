const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    title: String,
    difficulty: String,
    completed: Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Goal', goalSchema);