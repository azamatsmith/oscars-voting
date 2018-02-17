import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, View } from 'react-native';

export default class ImageSection extends React.Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
  };

  static defaultProps = {};

  render() {
    return <Image source={{ uri: this.props.source }} style={styles.image} />;
  }
}

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    height: 300,
    marginTop: 8,
    width: 200,
  },
});
