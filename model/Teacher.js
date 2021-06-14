const mongoose = require('mongoose');


const teacherSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Teacher', teacherSchema);