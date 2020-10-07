const express = require("express");
const router = express.Router();
const Question = require('../../models/Question');

router.get("/test", (req, res) => {
    res.json({ msg: "This is the questions route" })
});

router.get('/all', (req, res) => {
    Question.find()
        .then(questions => res.json(questions))
        .catch(err =>
            res.status(404).json({ notquestionfound: 'No question found' })
        );
});

router.get('/progress/:progress', (req, res) => {
    Question.find({progress: req.params.progress})
        .then(questions => res.json(questions))
        .catch(err =>
            res.status(404).json({ notquestionfound: 'No question found with that progress' })
        );
});

module.exports = router;