import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {Button, MainView, Text} from 'src/common';
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
    const itemData = this.props.categoryData[this.state.selectedItemIndex];
    return (
      <View style={{flex: 1}}>
        <ImageSection source={itemData.Poster} />
        <Text
          style={{
            fontSize: 22,
            flex: 1,
            paddingTop: 20,
            textAlign: 'center',
          }}>
          {itemData.Title}
        </Text>
        <View style={styles.buttonRow}>
          <Button text="<" onPress={() => console.log('prev')} />
          <Button text=">" onPress={() => console.log('next')} />
        </View>
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

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
  },
});

const mapStateToProps = ({categoryData}) => ({
  categoryData: categoryData.categoryData,
});

export default connect(mapStateToProps, {fetchCategoryData})(CategoryScreen);
