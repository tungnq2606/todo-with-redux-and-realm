import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  createTask,
  filterByText,
  getAllTasks,
  updateStatus,
} from '../database/services';

const initialState = {data: [], loading: true};

export const getTodo = createAsyncThunk('todo/getTodoList', async () => {
  return getAllTasks();
});

export const addTodo = createAsyncThunk('todo/addTodo', async data => {
  return createTask(data);
});

export const filter = createAsyncThunk('todo/filter', async keyword => {
  return filterByText(keyword);
});

export const updateTaskStatus = createAsyncThunk(
  'todo/updateStatus',
  async data => {
    const {id, status} = data;
    return updateStatus(id, status);
  },
);

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
      state.data.push(action.payload);
    });
    builder.addCase(filter.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(updateTaskStatus.fulfilled, (state, action) => {
      const {_id, completed} = action.payload;
      state.data = state.data.map(item => {
        if (item._id === _id) {
          item.completed = completed;
        }
        return item;
      });
    });
  },
});

export default todoSlice.reducer;
