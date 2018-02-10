import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'src/common';

export default class CategoryItem extends React.Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  };

  static defaultProps = {};

  // PRIVATE

  _navigate = () => {
    const {category, id, navigation} = this.props;
    navigation.navigate('CategoryScreen', {category, id});
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._navigate}>
          <Text style={styles.text}>{this.props.category}</Text>
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
