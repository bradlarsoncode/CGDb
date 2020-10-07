const express = require("express");
const router = express.Router();
const Question = require('../../models/Question');


// const mongoose = require('mongoose');

router.get('/all', (req, res) => {
    Question.find()
    .then(question => res.json(question))
    .catch(err =>
        res.status(404).json({ notquestionfound: 'No good' })
    );
})


router.get('/progress/:id', (req, res) => {
    Question.find({progress: req.params.id})
    .then(question => res.json(question))
    .catch(err =>
        res.status(404).json({ notquestionfound: 'No question found with that progress Id' })
        );
        
    });
    
    
    // router.get('/initial')
    
    // router.get('/:id', (req, res) => {
    //     // Question.find({ progress: id})
    //     //     .then(question => res.json(question))
    //     //     .catch(err =>
    //     //         res.status(404).json({ notquestionfound: 'No question found with that ID' })
    //     //     );
    //     Question.find()
    //     .then(question => res.json(question))
    //     .catch(err =>
    //         res.status(404).json({ notquestionfound: 'No good' })
    //     );
    // });
module.exports = router;