import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';

export default class ImageSection extends React.Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
  };

  static defaultProps = {};

  render() {
    return (
      <View>
        <Image source={{ uri: this.props.source }} style={{ height: 300 }} />
      </View>
    );
  }
}
