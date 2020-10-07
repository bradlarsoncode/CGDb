
import axios from 'axios';

export const updateSanity = (id, sanity) => {
    return axios.patch(`/api/users/${id}`, sanity);
  };

