import axios from 'axios';

const BASE_URL = process.env.BASE_URL;

const _axios = axios.create({
  baseURL: 'http://49.50.162.187:8080/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const api = {
  submitForm: async ({ data }) => {
    try {
      const response = await _axios.post(
        'manager/register',
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
  getResult: async ({ param }) => {
    try {
      const response = await _axios.get(`/${param}`);

      if (response.status !== 200) {
        throw new Error('Error');
      }

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getDashboard: async ({ param }) => {
    try {
      const response = await _axios.get(`dashboard/${param}`);

      if (response.status !== 200) {
        throw new Error('Error');
      }

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
