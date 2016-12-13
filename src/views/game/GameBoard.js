'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { Color, StatusBarHeight } from '../../utils/theme';
import { removeTopCard } from '../../actions/deck';
import Card from '../components/Card';
const { height, width } = Dimensions.get('window');

class GameBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { cards } = this.props;
    return (
      <View style={styles.container}>
        {cards.map((card, index) => {
          return (
            <Card 
              style={{ zIndex: index, top: height / 5 + (index * 5) }}
              key={index} 
              number={card.number} 
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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