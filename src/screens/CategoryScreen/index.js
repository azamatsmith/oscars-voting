import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { MainView, Text } from 'src/common';

export default class CategoryScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params.category,
    };
  };

  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <MainView>
        <Text>Placeholder</Text>
      </MainView>
    );
  }
}
