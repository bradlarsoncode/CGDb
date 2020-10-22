
import axios from 'axios';

export const updateSanity = (email, sanity) => {
    return axios.patch('/api/users/', {email, sanity});
  };

export const resetSanity = (email) => {
  return axios.patch('/api/users/resetSanity', { email });
};



