import {createSlice} from '@reduxjs/toolkit';

export default createSlice({
  name: 'filters',
  initialState: {keywords: ''},
  reducers: {
    searchFilterChange: (state, action) => {
      state.keywords = action.payload;
    },
  },
});
