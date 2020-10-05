const express = require("express");
const router = express.Router();

// router.get("/test", (req, res) => res.json({ msg: "This is the tweets route" }));


const mongoose = require('mongoose');

const Question = require('../../models/Question');


router.get('/:id', (req, res) => {
    Question.findById(req.params.id)
        .then(question => res.json(question))
        .catch(err =>
            res.status(404).json({ notquestionfound: 'No question found with that ID' })
        );
});

router.get('/:weirdness', (req, res) => {
    Question.find({question: req.params.weirdness})
        .then(question => res.json(question))
        .catch(err =>
            res.status(404).json({ notquestionfound: 'No question found with that ID' })
        );
});

// router.get('/question/:question_id', (req, res) => {
//     Question.find({ question: req.params.question_id })
//         .then(questions => res.json(questions))
//         .catch(err =>
//             res.status(404).json({ noquestionfound: 'Question does not exist' }
//             )
//         );
// });


module.exports = router;