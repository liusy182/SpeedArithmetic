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
import GameResult from './GameResult';

const DisplayState = {
  Begin: 'Begin',
  Game: 'Game',
  Result: 'Result'
};

export default class GameController extends Component {
  static PropTypes = {
    navigator: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.timer = new Timer();
    this.state = {
      displayState: DisplayState.Begin,
      time: this.timer.getTime().display
    };
    this.renderBegin = this.renderBegin.bind(this);
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
    this.setState({ displayState : DisplayState.Game });
    this.timer.start();
  }

  onTick() {
    this.setState({ time : this.timer.getTime().display });
  }

  onComplete() {
    this.timer.stop();
    this.setState({ displayState: DisplayState.Result });
  }

  renderBegin() {
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

  renderResult() {
    return (
      <View style={styles.container}>
        <Text style={styles.timer} >
          {this.state.time}
        </Text>
        <GameResult />
      </View>
    );
  }
  
  render() {
    const { displayState } = this.state;
    if (displayState === DisplayState.Begin) return this.renderBegin();

    else if (displayState === DisplayState.Game) return this.renderGame();

    else if (displayState === DisplayState.Result) return this.renderResult();
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