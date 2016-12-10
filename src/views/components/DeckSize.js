'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Slider,
  View
} from 'react-native';
import { Color } from '../../utils/theme';

export default class DeckSize extends Component {

  render() {
    const { numOfCards, onValueChange } = this.props;
    return (
      <View style={styles.section}>
        <Text style={styles.caption}>
          {`Number of cards: ${numOfCards}`}
        </Text>
        <Slider 
          style={styles.slider}
          minimumValue={5} 
          maximumValue={100}
          step={1}
          value={numOfCards}
          onValueChange={onValueChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    marginVertical: 8
  },
  caption: {
    alignSelf: 'center'
  },
  slider: {
    marginHorizontal: 10,
    marginVertical: 6
  }
});
