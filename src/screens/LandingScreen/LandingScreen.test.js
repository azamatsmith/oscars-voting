import React from 'react';
import { shallow } from 'enzyme';
import LandingScreen from './';
import { categories } from 'src/utils/data';

describe('<LandingScreen />', () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
    },
  };

  const shallowWrapper = shallow(<LandingScreen {...props} />);

  it('renders without crashing', () => {
    expect(shallowWrapper.find('MainView').length).toEqual(1);
  });

  it('renders a list', () => {
    expect(shallowWrapper.find('FlatList').length).toEqual(1);
  });

  it('has a function that returns items', () => {
    const item = categories[0];
    const fn = shallowWrapper.instance()._renderItem;
    const CategoryItem = shallow(fn(item));
    expect(CategoryItem).not.toBeNull();
  });

  it('has a function that navigate to a new screen', () => {
    const fn = shallowWrapper.instance()._navigate;
    expect(props.navigation.navigate).toHaveBeenCalledTimes(0);
    fn(categories[0]);
    expect(props.navigation.navigate).toHaveBeenCalledTimes(1);
    expect(props.navigation.navigate.mock.calls[0][0]).toEqual(
      'CategoryScreen'
    );
    expect(props.navigation.navigate.mock.calls[0][1]).toEqual({
      category: 'Best Picture',
      id: 0,
    });
  });
});
