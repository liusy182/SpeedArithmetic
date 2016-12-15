'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import { Color, StatusBarHeight } from '../../utils/theme';
import Button from '../components/Button';

class GameResult extends Component {
  static propTypes = {
    
  }

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: ''
    }
  }

  onChange(e) {
    this.setState({ value: e.nativeEvent.text });
  }

  onSubmit() {
    const { result } = this.props;
    
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Input Sum</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          returnKeyType='done'
          onChange={this.onChange}
          value={this.state.value}
        />
        <Button 
          text='Get Ready' 
          onPress={this.onSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  text: {
    textAlign: 'center'
  },
  input: {
    borderColor: Color.Gray,
    borderWidth: 1,
    height: 30
  }
});


function mapStateToProps(state, ownProps) {
  const { result } = state
  return {
    result: result
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(GameResult)