import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'src/common';
import {StyleSheet, TouchableHighlight} from 'react-native';

export default class Button extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    text: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    style: {},
    text: null,
  };

  // PRIVATE

  _renderText = () => <Text>{this.props.text}</Text>;

  render() {
    const {children, style, ...rest} = this.props;
    return (
      <TouchableHighlight style={[styles.button, style]} {...rest}>
        {children || this._renderText()}
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 2,
    borderWidth: 2,
    padding: 12,
  },
});
