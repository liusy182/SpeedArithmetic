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

class GameController extends Component {
  static PropTypes = {
    navigator: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.timer = new Timer();
  }
  
  render() {
    return (
      <TouchableOpacity 
        style={styles.container}
        onPress={() => {}}
      >
        <Text style={styles.timer} >
          {this.timer.getTime().display}
        </Text>
        <Text style={styles.text}>
          Tab to Start!
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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


function mapStateToProps(state, ownProps) {
  const { cards } = state.deck
  return {
    cards: cards
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeTopCard: () => dispatch(removeTopCard())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameController)