'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import { Color, StatusBarHeight } from '../../utils/theme';
import { removeTopCard } from '../../actions/deck';
import Timer from '../../utils/Timer';
import GameBoard from './GameBoard';

export default class GameController extends Component {
  static PropTypes = {
    navigator: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.timer = new Timer();
    this.state = {
      start: false,
      time: this.timer.getTime().display
    };
    this.renderTap = this.renderTap.bind(this);
    this.renderGame = this.renderGame.bind(this);
    this.onTap = this.onTap.bind(this);
    this.onTick = this.onTick.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }

  componentDidMount() {
    this.timer.addListener(this.onTick);
  }

  componentWillUnmount() {
    this.timer.removeListener(this.onTick);
  }

  onTap() {
    this.setState({ start : true });
    this.timer.start();
  }

  onTick() {
    this.setState({ time : this.timer.getTime().display });
  }

  onComplete() {
    this.timer.stop();
  }

  renderTap() {
    return (
      <TouchableOpacity 
        style={styles.container}
        onPress={this.onTap}
      >
        <Text style={styles.timer} >
          {this.state.time}
        </Text>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            Tap to Start!
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderGame() {
    return (
      <View style={styles.container}>
        <Text style={styles.timer} >
          {this.state.time}
        </Text>
        <GameBoard onComplete={this.onComplete} />
      </View>
    );
  }
  
  render() {
    return this.state.start? this.renderGame() : this.renderTap();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 36
  },
  timer: {
    position: 'absolute',
    right: 20,
    top: StatusBarHeight + 10,
    fontSize: 18
  }
});