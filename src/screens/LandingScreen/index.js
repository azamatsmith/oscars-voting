import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import {MainView} from 'src/common';
import {categories} from 'src/utils/data';
import CategoryItem from './components/CategoryItem';

export default class LandingScreen extends Component {
  static navigationOptions = {
    title: 'Oscars Voting - 2018',
  };

  static propTypes = {};
  static defaultProps = {};

  // PRIVATE

  _renderItem = ({item}) => (
    // MTS - Destructuring item makes a prop for each object property
    // and passes it into the component
    <CategoryItem {...item} />
  );

  render() {
    return (
      <MainView>
        <FlatList
          data={categories}
          keyExtractor={(item, i) => item.category}
          renderItem={this._renderItem}
        />
      </MainView>
    );
  }
}
