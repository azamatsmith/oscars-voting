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

  static propTypes = {
    categoryData: PropTypes.array,
    fetchCategoryData: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          id: PropTypes.string,
        }),
      }),
    }).isRequired,
  };

  static defaultProps = {};

  state = {
    selectedItemIndex: 0,
  };

  componentDidMount() {
    const {id} = this.props.navigation.state.params;
    this.props.fetchCategoryData(id);
  }

  // PRIVATE

  _handleCycle = direction => {
    const {categoryData} = this.props;
    const {selectedItemIndex} = this.state;
    if (selectedItemIndex === 0 && direction === -1) {
      return null;
    }
    if (selectedItemIndex === categoryData.length - 1 && direction === 1) {
      return null;
    }
    return this.setState({
      selectedItemIndex: selectedItemIndex + direction,
    });
  };

  _renderItem = () => {
    const itemData = this.props.categoryData[this.state.selectedItemIndex];
    return (
      <View>
        <ImageSection source={itemData.Poster} />
        <Text
          style={{
            fontSize: 22,
            flex: 1,
            paddingTop: 20,
            textAlign: 'center',
          }}
        >
          {itemData.Title}
        </Text>
        <View style={styles.buttonRow}>
          <Button onPress={() => this._handleCycle(-1)} text="Prev" />
          <Button onPress={() => this._handleCycle(1)} text="Next" />
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

// Export class so that you do not have to mount redux store in tests
export {CategoryScreen};

const styles = StyleSheet.create({
  buttonRow: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});

const mapStateToProps = ({categoryData}) => ({
  categoryData: categoryData.categoryData,
});

export default connect(mapStateToProps, {fetchCategoryData})(CategoryScreen);
