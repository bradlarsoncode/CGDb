import * as QAPIUtil from '../util/question_api_util';

export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

export const receiveQuestion = (question) => ({
    type: RECEIVE_QUESTION,
    question
});
export const removeQuestion = () => ({
    type: REMOVE_QUESTION
});

export const requestQuestions = () => dispatch => (
    QAPIUtil.fetchQuestions()
        .then(question => dispatch(receiveQuestion(question)),
        err => console.log(err))
)

export const requestByProgress = (progress) => dispatch => (
    QAPIUtil.fetchByProgress(progress)
        .then(question => dispatch(receiveQuestion(question)),
        err => console.log(err))
)