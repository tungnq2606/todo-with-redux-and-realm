/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import TodoList from './src/TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
