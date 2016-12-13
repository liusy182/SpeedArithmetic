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
import Card from '../components/Card';

class GameBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Card number={10} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.White
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

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard)