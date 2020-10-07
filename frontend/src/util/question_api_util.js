
import axios from 'axios';

export const fetchQuestion = () => {
    return axios.get('/api/questions')
};

export const fetchQuestions = () => {
    return axios.get('api/questions/all')
};

export const fetchByProgress = progress => {
    return axios.get(`api/questions/progress/${progress}`)
};

// export const signup = (userData) => {
//   return axios.post('/api/users/register', userData);
// };

// export const login = (userData) => {
//   return axios.post('/api/users/login', userData);
// };