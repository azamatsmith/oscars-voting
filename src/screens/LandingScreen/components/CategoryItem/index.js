import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import { Text } from 'src/common';

export default class CategoryItem extends React.Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
  };

  static defaultProps = {};

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => console.log('pressed', this.props)}>
          <Text style={styles.text}>{this.props.category}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 14,
  },
});
