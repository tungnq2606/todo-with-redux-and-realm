/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import PushNotification from 'react-native-push-notification';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import TodoList from './src/TodoList';

const App = () => {
  useEffect(()=>{
    PushNotification.createChannel({
      channelId: 'expired',
      channelName: 'Expired Tasks',
    });
  },[])
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
