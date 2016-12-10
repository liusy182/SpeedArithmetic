'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import { Color } from '../../utils/theme';

export default class Button extends Component {
  static propTypes = {
    onPress: React.PropTypes.func,
    text: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={this.props.onPress}
      >
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.Primary,
    padding: 10,
    borderRadius: 20
  },
  buttonText: {
    color: Color.White,
    fontSize: 16
  }
});
