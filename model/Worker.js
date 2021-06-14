const mongoose = require('mongoose');


const workerSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Worker', workerSchema);