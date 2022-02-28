import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../TodoList/todoSlice'

const store = configureStore({
    reducer: {
      todoList: todoReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  });
  
  export default store;
  