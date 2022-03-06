/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-get-random-values';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
    },
    requestPermissions: Platform.OS === 'ios',
    permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
});


AppRegistry.registerComponent(appName, () => App);
