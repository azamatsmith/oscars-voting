import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {categories} from 'src/utils/data';

export default class LandingScreen extends Component {
  static propTypes = {};
  static defaultProps = {};

  // PRIVATE

  _renderItem = ({item}) => {
    return <Text style={styles.text}>{item.category}</Text>;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello Oscars 2018</Text>
        <FlatList
          data={categories}
          keyExtractor={(item, i) => item.category}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 25,
    padding: 10,
  },
});
