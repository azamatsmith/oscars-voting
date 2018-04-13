import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Loading, MainView, Text } from 'src/common';
import { connect } from 'react-redux';
import { fetchCategoryData } from 'src/actions';
import TextSection from './components/TextSection';

class CategoryScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
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

  componentDidMount() {
    const { id } = this.props.navigation.state.params;
    this.props.fetchCategoryData(id);
  }

  // PRIVATE

  _getWidth = () => {
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
      'window'
    );

    function wp(percentage) {
      const value = percentage * viewportWidth / 100;
      return Math.round(value);
    }

    // const slideHeight = viewportHeight * 0.36;
    const slideWidth = wp(75);
    const itemHorizontalMargin = wp(2);

    const sliderWidth = viewportWidth;
    const itemWidth = slideWidth + itemHorizontalMargin * 2;
    return { sliderWidth, itemWidth };
  };

  _renderItem = ({ item, index }) => {
    return (
      <View
        style={[styles.itemContainer, { width: this._getWidth().itemWidth }]}
      >
        <Image
          resizeMode="contain"
          source={{ uri: item.picture }}
          style={styles.imageStyle}
        />
        <TextSection data={item} />
      </View>
    );
  };

  _renderCarousel = () => {
    const { itemWidth, sliderWidth } = this._getWidth();

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

  render() {
    return (
      <MainView>
        {this.props.categoryData.length > 0 ? (
          this._renderCarousel()
        ) : (
          <Loading />
        )}
      </MainView>
    );
  }
}

// Export class so that you do not have to mount redux store in tests
export { CategoryScreen };

const styles = StyleSheet.create({
  imageStyle: {
    height: 300,
    width: '100%',
  },
  itemContainer: {
    flex: 1,
    paddingTop: 20,
  },
});

const mapStateToProps = ({ categoryData }) => ({
  categoryData: categoryData.categoryData,
});

export default connect(mapStateToProps, { fetchCategoryData })(CategoryScreen);
