'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  Image,
  Slider,
  View
} from 'react-native';
import { Color } from '../../utils/theme';
import { createDeck } from '../../actions/deck';
import Button from '../components/Button';
import NumberRange from '../components/NumberRange';
import DeckSize from '../components/DeckSize';

class Setup extends Component {
  static PropTypes = {
    navigator: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      max: 9,
      numOfCards: 10
    };
  }

  render() {
    const { max, numOfCards } = this.state;
    const { navigator, getReady } = this.props;
    return (
      <View style={styles.container}>
        <NumberRange 
          max={max} 
          onValueChange={(v) => this.setState({ max: v })} />
        <DeckSize 
          numOfCards={numOfCards} 
          onValueChange={(v) => this.setState({ numOfCards: v })} />
        <Button 
          text='Get Ready' 
          onPress={() => getReady(max, numOfCards)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.White
  }
});

function mapStateToProps(state, ownProps) {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { navigator } = ownProps;
  return {
    getReady: (max, numOfCards) => {
      return dispatch(createDeck(max, numOfCards))
      .then(() => navigator.push({ id: 'game' }));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup)
