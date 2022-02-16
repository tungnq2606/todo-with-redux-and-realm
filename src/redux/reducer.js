import {combineReducers} from 'redux';
import todoReducer from '../TodoList/todoSlice';
import filterReducer from '../TodoList/filterSlice';

const rootReducer = combineReducers({
  todoList: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
