'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import AppNavigator from './AppNavigator';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} barStyle='default' />
        <AppNavigator />
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
