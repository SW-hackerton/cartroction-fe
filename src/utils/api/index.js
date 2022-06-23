import axios from 'axios';

const BASE_URL = process.env.BASE_URL;

export const api = {
  submitForm: ({ data }) => {
    try {
      const response = axios.post(`${BASE_URL}/manager/register`, data);

      if (response.status !== 200) {
        throw new Error('Error');
      }

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getResult: ({ param }) => {
    try {
      const response = axios.get(`${BASE_URL}/${param}`);

      if (response.status !== 200) {
        throw new Error('Error');
      }

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
