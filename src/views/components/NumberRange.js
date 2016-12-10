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

export default class NumberRange extends Component {

  render() {
    const { max, onValueChange } = this.props;
    return (
      <View style={styles.section}>
        <Text style={styles.caption}>
          {`Number range: 1 to ${max}`}
        </Text>
        <Slider 
          style={styles.slider}
          minimumValue={9} 
          maximumValue={99}
          step={1}
          value={max}
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
