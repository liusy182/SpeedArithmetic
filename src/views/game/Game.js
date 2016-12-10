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

export default class Game extends Component {
  static PropTypes = {
    navigator: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }
  
  render() {
    const { navigator, max, numOfCards}   = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.caption}>
          {`${max} ${numOfCards}`}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});
