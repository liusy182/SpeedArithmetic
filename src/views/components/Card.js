'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import { Color } from '../../utils/theme';
const { height, width } = Dimensions.get('window');

export default class Card extends Component {

  render() {
    const { style, number } = this.props;
    return (
      <View style={[styles.card, style]}>
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
    position: 'absolute',
    top: height / 5,
    left: width / 6,
    width: width * 2 / 3,
    height: height * 3 / 5,
    backgroundColor: Color.LightGray,
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
