import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default class Loading extends React.Component {
  static propTypes = {
    loading: PropTypes.bool,
  };

  static defaultProps = {
    loading: true,
  };

  render() {
    const { loading } = this.props;
    if (!loading) {
      return null;
    } else {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator color="#0000ff" size="large" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
