const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// there should be multiple choices each with their own point awarded to sanity

// const Response = new Schema({   
//     type: String,
//     sanity_point: Integer
// })

const QuestionSchema = new Schema({

    prompt: {
        type: String,
        required: true
    },
    progress: {
        type: Number,
        required: true
    },
    responses: {
        type: Array,
        required: true
    },    // should display what responses we can chose
    ui_bank: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    }

});


// module.exports = Question = mongoose.model('Question', QuestionSchema);

// TODO undable to import Question from seedfile unless export setup like below:
const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
