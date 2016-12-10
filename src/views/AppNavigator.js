'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator 
} from 'react-native';
import { Color } from '../utils/theme';
import Setup from './game/Setup';
import Game from './game/Game';

export default class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    switch(route.id) {
      case 'setup':
        return <Setup navigator={navigator} />;
      case 'game':
        return <Game 
          navigator={navigator} 
          max={route.max}
          numOfCards={route.numOfCards}
        />;
      default:
        return <Home navigator={navigator} />;
    }
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ id: 'setup' }}
        renderScene={this.renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
