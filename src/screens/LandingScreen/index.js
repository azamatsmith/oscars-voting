import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {categories} from 'src/utils/data';

export default class LandingScreen extends Component {
  static propTypes = {};
  static defaultProps = {};

  // PRIVATE

  _renderList = () => null;

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello Oscars 2018</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 25,
  },
});
