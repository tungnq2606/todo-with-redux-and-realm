import {createSlice} from '@reduxjs/toolkit';

export default createSlice({
  name: 'todos',
  initialState: [{id: 1, value: 'Learn Redux'}],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
  },
});
