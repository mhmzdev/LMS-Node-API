const express = require('express');
const router = express.Router();

// import model
const Teacher = require('../model/Teacher');

// GET
router.get('/', async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.json(teachers);

    } catch (err) {
        res.json({ message: err.message });
    }
});

// POST
router.post('/postTeacher', async (req, res) => {
    // Making an object
    const teacher = new Teacher({
        fullName: req.body.fullName,
        email: req.body.email,
        subject: req.body.subject,
        experience: req.body.experience
    });

    // Upload to DB
    try {
        const newTeacher = await teacher.save();
        res.json(newTeacher);
    } catch (err) {
        res.json({ message: err.message });
    }
});

// DELETE
router.delete('/deleteTeacher/:teacherID', async (req, res) => {
    try {
        const teacher = await Teacher.remove({
            _id: req.params.teacherID
        });
        res.json(teacher);
    } catch (err) {
        res.json({ message: err.message });
    }
});


// PATCH/UPDATE
router.patch('/updateTeacher/:teacherID', async (req, res) => {

    try {
        const updatedTeacher = await Teacher.updateOne(
            { _id: req.params.teacherID },
            {
                $set: {
                    fullName: req.body.fullName,
                    email: req.body.email,
                    subject: req.body.subject,
                    experience: req.body.experience
                }
            }
        );

        res.json(updatedTeacher);
    } catch (err) {
        res.json({ message: err.message });
    }
});


module.exports = router;