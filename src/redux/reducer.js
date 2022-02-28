import {combineReducers} from 'redux';
import todoReducer from '../TodoList/todoSlice';

const rootReducer = combineReducers({
  todoList: todoReducer,
});

export default rootReducer;
