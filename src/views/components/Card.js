'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Color } from '../../utils/theme';

export default class Card extends Component {

  render() {
    const { cardStyle, number } = this.props;
    return (
      <View style={[styles.card, cardStyle]}>
        <View style={styles.cardContent}>
          <Text style={styles.text}>
            {number}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: 240,
    height: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.Gray
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 80,
    textAlign: 'center'
  }
});
