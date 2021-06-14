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

// DB Connection
mongoose.connect("mongodb+srv://testuser:testuser123@flutternodejs.92whg.mongodb.net/FlutterNodejs?retryWrites=true&w=majority", { useNewUrlParser: true }, () => {
    console.log("DB CONNECTED!");
})


// Listen to port
app.listen(process.env.PORT || 3000);