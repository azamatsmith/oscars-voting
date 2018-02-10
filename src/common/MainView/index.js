// MTS - The purpose of this component is to provide consistent styling
// for the main container of each screen.
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

export default class MainView extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
