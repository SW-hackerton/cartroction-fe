import { configureStore } from '@reduxjs/toolkit';
import userType from 'store/userTypeSlice';

export const store = configureStore({
  reducer: {
    userType,
  },
});
