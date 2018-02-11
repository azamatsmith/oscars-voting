import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'src/common';
import { StyleSheet, TouchableHighlight } from 'react-native';

export default class Button extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    text: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    text: null,
  };

  // PRIVATE

  _renderText = () => <Text>{this.props.text}</Text>;

  render() {
    const { children, style, ...rest } = this.props;
    return (
      <TouchableHighlight style={[styles.button, style]} {...rest}>
        {children || this._renderText()}
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
  },
});
