import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'src/common';

export default class CategoryItem extends React.Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  render() {
    const { category, onPress } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.text}>{category}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});
