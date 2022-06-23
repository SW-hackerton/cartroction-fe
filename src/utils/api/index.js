import axios from 'axios';

const BASE_URL = process.env.BASE_URL;

const _axios = axios.create({
  baseURL: 'http://49.50.162.187:8080/manager/register2',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const api = {
  submitForm: ({ data }) => {
    try {
      const response = axios.post(
        'http://49.50.162.187:8080/manager/register2',
        data,
      );

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
