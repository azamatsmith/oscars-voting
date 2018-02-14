import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TextInput, View} from 'react-native';
import {Text} from 'src/common';

export default class Input extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    errorText: null,
    placeholder: '',
  };

  render() {
    const {label, ...rest} = this.props;
    return (
      <View style={styles.container}>
        <Text>{label}</Text>
        <TextInput {...rest} style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
  },
});
