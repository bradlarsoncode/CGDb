const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// there should be multiple choices each with their own point awarded to sanity

const Response = new Schema({   
    type: String,
    sanity_point: Integer
})

const QuestionSchema = new Schema({

    prompt: {
        type: String,
        required: true
    },
    responses: [Response],    // should display what responses we can chose
    question_type: {
        type: String,
        required: true
    },
    weirdness: {
        type: Integer,
        required: true
    }

});

module.exports = Question = mongoose.model('question', QuestionSchema);