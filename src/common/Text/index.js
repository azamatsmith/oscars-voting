import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

export default class AppText extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
  };

  static defaultProps = {
    style: null,
  };

  render() {
    const { children, style } = this.props;
    return <Text style={[styles.defaultTextStyle, style]}>{children}</Text>;
  }
}

const styles = StyleSheet.create({
  defaultTextStyle: {
    color: 'black',
    fontSize: 14,
  },
});
