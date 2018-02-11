import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {MainView, Text} from 'src/common';
import {connect} from 'react-redux';
import {fetchCategoryData} from 'src/actions';
import ImageSection from './components/ImageSection';

class CategoryScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    const {params} = navigation.state;
    return {
      title: params.category,
    };
  };

  static propTypes = {};

  static defaultProps = {};

  state = {
    selectedItemIndex: 0,
  };

  componentDidMount() {
    const {id} = this.props.navigation.state.params;
    this.props.fetchCategoryData(id);
  }

  // PRIVATE

  _renderItem = () => {
    console.log('this.props', this.props);
    const itemData = this.props.categoryData[this.state.selectedItemIndex];
    console.log('itemData', itemData);
    return (
      <View style={{flex: 1}}>
        <ImageSection source={itemData.Poster} />
        <Text>{itemData.title}</Text>
      </View>
    );
  };

  _renderLoading = () => <Text>Loading</Text>;

  render() {
    return (
      <MainView>
        {this.props.categoryData.length > 0
          ? this._renderItem()
          : this._renderLoading()}
      </MainView>
    );
  }
}

const mapStateToProps = ({categoryData}) => ({
  categoryData: categoryData.categoryData,
});

export default connect(mapStateToProps, {fetchCategoryData})(CategoryScreen);
