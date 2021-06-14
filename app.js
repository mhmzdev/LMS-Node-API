const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// All Middlewares
// CORS
app.use(cors());

// JSON parsing
app.use(express.json());

// import routes
const studentsRoute = require('./routes/students');
const teachersRoute = require('./routes/teachers');
const workersRoute = require('./routes/workers');

// routes middleware
app.use('/student', studentsRoute);
app.use('/teacher', teachersRoute);
app.use('/worker', workersRoute);

// Routes
app.get('/', (req, res) => {
    res.send('HOME!');
});
var dbConnect = process.env.DB_CONNECT;
// DB Connection

mongoose.connect(String(dbConnect), { useNewUrlParser: true }, () => {
    console.log("DB CONNECTED!");
})


// Listen to port
app.listen(process.env.PORT || 3000);