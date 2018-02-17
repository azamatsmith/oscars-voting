import React from 'react';
import {Linking, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'src/common';
import PropTypes from 'prop-types';

export default class TextSection extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    }),
  };

  static defaultProps = {
    data: {
      link: '',
      name: '',
    },
  };

  // PRIVATE

  _openLink = () => {
    const {link} = this.props.data;
    Linking.canOpenURL(link).then(supported => {
      if (supported) {
        Linking.openURL(link);
      } else {
        console.log("Don't know how to open URI: " + link);
      }
    });
  };

  _renderLink = () => {
    const {link} = this.props.data;
    if (link) {
      return (
        <TouchableOpacity onPress={this._openLink}>
          <Text>More</Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  render() {
    const {link, name} = this.props.data;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        {this._renderLink()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
});
