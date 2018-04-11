import React from 'react';
import PropTypes from 'prop-types';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Button, MainView, Text} from 'src/common';
import {connect} from 'react-redux';
import {fetchCategoryData} from 'src/actions';
import ImageSection from './components/ImageSection';
import TextSection from './components/TextSection';

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
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          state: PropTypes.shape({
            category: PropTypes.string,
          }),
        }),
      }),
    }).isRequired,
  };

  static defaultProps = {
    fetchCategoryData: () => null,
    navigation: {
      state: {
        params: {
          id: null,
        },
      },
    },
  };

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

  _renderItem = ({item, index}) => {
    // const itemData = this.props.categoryData[this.state.selectedItemIndex];
    return (
      <View style={{flex: 1}}>
        <Image
          source={{uri: item.picture}}
          style={{
            ...StyleSheet.absoluteFillObject,
            resizeMode: 'cover',
          }}
        />
        <View style={styles.buttonRow}>
          <Button onPress={() => this._handleCycle(-1)} text="Prev" />
          <Button onPress={() => this._handleCycle(1)} text="Next" />
        </View>
        <TextSection data={item} />
      </View>
    );
  };

  _renderCarousel = () => {
    const {width: viewportWidth, height: viewportHeight} = Dimensions.get(
      'window'
    );
    function wp(percentage) {
      const value = percentage * viewportWidth / 100;
      return Math.round(value);
    }
    const slideHeight = viewportHeight * 0.36;
    const slideWidth = wp(75);
    const itemHorizontalMargin = wp(2);

    const sliderWidth = viewportWidth;
    const itemWidth = slideWidth + itemHorizontalMargin * 2;

    return (
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={this.props.categoryData}
        itemWidth={itemWidth}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
      />
    );
  };

  _renderLoading = () => <Text>Loading</Text>;

  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.categoryData.length > 0
          ? this._renderCarousel()
          : this._renderLoading()}
      </View>
    );
  }
}

// Export class so that you do not have to mount redux store in tests
export {CategoryScreen};

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

const mapStateToProps = ({categoryData}) => ({
  categoryData: categoryData.categoryData,
});

export default connect(mapStateToProps, {fetchCategoryData})(CategoryScreen);
