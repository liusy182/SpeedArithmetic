'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Animated
} from 'react-native';
import { Color, StatusBarHeight } from '../../utils/theme';
const { height, width } = Dimensions.get('window');

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.cardAnim = new Animated.Value(1);
    this.pressed = false;
    this.onPress = this.onPress.bind(this);
    
  }

  onPress() {
    if(this.pressed) return;
    this.pressed = true;
    Animated.timing(this.cardAnim, { 
      toValue: 0,
      duration: 250
    }).start();
    this.props.onTap();
  }

  render() {
    const { style, number, onTap, index } = this.props;
    return (
      <Animated.View style={[
          styles.card, 
          { 
            zIndex: index, 
            top: this.cardAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [StatusBarHeight, height / 5 + (index * 5)],
            }),
            left: this.cardAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [10, width / 6],
            }),
            width: this.cardAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [50, width * 2 / 3],
            }),
            height: this.cardAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [70, height * 3 / 5],
            }),
            borderRadius: this.cardAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [5, 20],
            })
          }
        ]}
      >
        <TouchableOpacity style={styles.cardContent} onPress={this.onPress}>
          <Animated.Text style={[
              styles.text,
              {
                transform: [{
                  scale: this.cardAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.2, 1],
                  })
                }]
              }
            ]}
          >
            {number}
          </Animated.Text>
        </TouchableOpacity>
      </Animated.View>
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
