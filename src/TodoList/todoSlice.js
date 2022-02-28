import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {createTask, filterByText, getAllTasks} from '../database/services';

const initialState = {data: null, loading: true};

export const getTodo = createAsyncThunk('todo/getTodoList', async () => {
  return getAllTasks();
});

export const addTodo = createAsyncThunk('todo/addTodo', async todo => {
  return createTask(todo);
});

export const filter = createAsyncThunk('todo/filter', async keyword => {
  return filterByText(keyword);
});

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  extraReducers: builder => {
    builder.addCase(getTodo.pending, state => {
      state.loading = true;
    });
    builder.addCase(getTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state = {...state, data: [...state.data, action.payload]};
    });
    builder.addCase(filter.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default todoSlice.reducer;
