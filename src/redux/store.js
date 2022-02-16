import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../TodoList/filterSlice';
import todosSlice from '../TodoList/todoSlice'

const store = configureStore({
    reducer: {
      todoList: todosSlice.reducer,
      filters: filterSlice.reducer
    },
  });
  
  export default store;
  