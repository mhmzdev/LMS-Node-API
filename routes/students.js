const express = require('express');
const router = express.Router();

// import model
const Student = require('../model/Student');

// GET
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);

    } catch (err) {
        res.json({ message: err.message });
    }
});


// POST
router.post('/postStudent', async (req, res) => {
    // Making an object
    const student = new Student({
        fullName: req.body.fullName,
        email: req.body.email,
        program: req.body.program,
        semester: req.body.semester
    });

    // Upload to DB
    try {
        const newStudent = await student.save();
        res.json(newStudent);
    } catch (err) {
        res.json({ message: err.message });
    }
});

// DELETE
router.delete('/deleteStudent/:stdID', async (req, res) => {
    try {
        const student = await Student.remove({
            _id: req.params.stdID
        });
        res.json(student);
    } catch (err) {
        res.json({ message: err.message });
    }
});


// PATCH/UPDATE
router.patch('/updateStudent/:stdID', async (req, res) => {

    try {
        const updatedStudent = await Student.updateOne(
            { _id: req.params.stdID },
            {
                $set: {
                    fullName: req.body.fullName,
                    email: req.body.email,
                    program: req.body.program,
                    semester: req.body.semester
                }
            }
        );

        res.json(updatedStudent);
    } catch (err) {
        res.json({ message: err.message });
    }
});


module.exports = router;