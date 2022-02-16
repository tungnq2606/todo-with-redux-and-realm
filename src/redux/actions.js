export const addTodo = data => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  };
};

export const filter = keywords => {
  return {
    type: 'filters/searchFilterChange',
    payload: keywords,
  };
};
