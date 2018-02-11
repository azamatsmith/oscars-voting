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

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }),
  };
  static defaultProps = {};

  // PRIVATE

  _navigate = ({category, id}) => {
    const {navigation} = this.props;
    navigation.navigate('CategoryScreen', {category, id});
  };

  _renderItem = ({item}) => (
    // MTS - Destructuring item makes a prop for each object property
    // and passes it into the component
    <CategoryItem {...item} onPress={() => this._navigate(item)} />
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
