'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import { Color } from '../utils/theme';


export default class Home extends Component {
  static PropTypes = {
    navigator: React.PropTypes.func.isRequired
  }
  
  render() {
    const { navigator } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          Good Morning
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
