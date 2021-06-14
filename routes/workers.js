const express = require('express');
const router = express.Router();

// import model
const Worker = require('../model/Worker');

// GET
router.get('/', async (req, res) => {
    try {
        const workers = await Worker.find();
        res.json(workers);

    } catch (err) {
        res.json({ message: err.message });
    }
});

// POST
router.post('/postWorker', async (req, res) => {
    // Making an object
    const worker = new Worker({
        fullName: req.body.fullName,
        designation: req.body.designation,
        salary: req.body.salary,
    });

    // Upload to DB
    try {
        const newWorker = await worker.save();
        res.json(newWorker);
    } catch (err) {
        res.json({ message: err.message });
    }
});

// DELETE
router.delete('/deleteWorker/:workerID', async (req, res) => {
    try {
        const worker = await Worker.remove({
            _id: req.params.workerID
        });
        res.json(worker);
    } catch (err) {
        res.json({ message: err.message });
    }
});


// PATCH/UPDATE
router.patch('/updateWorker/:workerID', async (req, res) => {

    try {
        const updatedWorker = await Worker.updateOne(
            { _id: req.params.workerID },
            {
                $set: {
                    fullName: req.body.fullName,
                    designation: req.body.designation,
                    salary: req.body.salary,
                }
            }
        );

        res.json(updatedWorker);
    } catch (err) {
        res.json({ message: err.message });
    }
});


module.exports = router;