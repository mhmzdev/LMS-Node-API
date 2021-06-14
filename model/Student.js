const mongoose = require('mongoose');


const studentSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    program: {
        type: String,
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Student', studentSchema);