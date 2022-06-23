import axios from 'axios';

const BASE_URL = process.env.BASE_URL;

const _axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const api = {
  submitForm: ({ data }) => {
    try {
      const response = _axios.post('/api/submitForm', data);

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
      const response = _axios.get(`/${param}`);

      if (response.status !== 200) {
        throw new Error('Error');
      }

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
