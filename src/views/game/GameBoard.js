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
  static propTypes = {
    onComplete: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.size = this.props.cards.length;
    this.onTap = this.onTap.bind(this);
  }

  onTap() {
    this.size -= 1;
    if(this.size === 0) this.props.onComplete();
  }

  render() {
    const { cards } = this.props;
    return (
      <View style={styles.container}>
        {cards.map((card, index) => {
          return (
            <Card 
              index={index}
              key={index} 
              number={card.number}
              onTap={this.onTap}
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