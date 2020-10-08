const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ftp: {
        type: Boolean,
        required: true
    },
    sanity: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});


// module.exports = User = mongoose.model('users', UserSchema);

// TODO undable to import Users into seedfile unless export setup like below:
const User = mongoose.model('users', UserSchema);
module.exports = User;
