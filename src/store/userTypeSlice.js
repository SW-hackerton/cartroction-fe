import { createSlice } from '@reduxjs/toolkit';

export const userType = createSlice({
  name: 'userType',
  initialState: {
    type: '',
  },
  reducers: {
    setUserType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setUserType } = userType.actions;
export default userType.reducer;
