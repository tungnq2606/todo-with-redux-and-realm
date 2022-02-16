import {createSelector} from '@reduxjs/toolkit';

export const todoListSelector = state => state.todoList;
export const searchTextSelector = state => state.filters.keywords;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  (todoList, searchText) => {
    return todoList.filter(todo => todo.value.toLowerCase().includes(searchText));
  },
);
