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
import Button from '../components/Button';
import { createDeck } from '../../actions/deck';

class Setup extends Component {
  static PropTypes = {
    navigator: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      max: 9,
      numOfCards: 10
    }
    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    const { max, numOfCards } = this.state;
    const { navigator, createDeck } = this.props;

    createDeck(max, numOfCards)
    .then(() => navigator.push({ 
      id: 'game', 
      max: max, 
      numOfCards: numOfCards
    }));
  }
  
  render() {
    const { max, numOfCards } = this.state;
    const { navigator } = this.props;
    return (
      <View style={styles.container}>
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
            onValueChange={(v) => this.setState({ max: v })}
          />
        </View>
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
            onValueChange={(v) => this.setState({ numOfCards: v })}
          />
        </View>
        <Button 
          text='Start' 
          onPress={this.startGame} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.White
  },
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

function mapStateToProps(state, ownProps) {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createDeck: () => dispatch(createDeck())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup)
