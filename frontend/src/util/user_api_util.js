
import axios from 'axios';

export const updateSanity = (email, sanity) => {
    return axios.patch('/api/users/', {email, sanity});
  };

