/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

 import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import App from './App';
import {name as appName} from './app.json';

// In App.js in a new project


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigator));
