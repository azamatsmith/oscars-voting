import React from 'react';
import { shallow } from 'enzyme';
import { CategoryScreen } from './';
import { categories } from 'src/utils/data';

describe('<CategoryScreen />', () => {
  const props = {
    categoryData: categories[0],
    fetchCategoryData: jest.fn(),
    navigation: {
      state: {
        params: {
          id: 44,
          category: 'A Category',
        },
      },
    },
  };

  const shallowWrapper = shallow(<CategoryScreen {...props} />);

  it('renders without crashing', () => {
    expect(shallowWrapper.find('MainView').length).toEqual(1);
  });

  it('has a function that increments and decrements the state', () => {
    expect(shallowWrapper.state().selectedItemIndex).toEqual(0);
    shallowWrapper.instance()._handleCycle(1);
    expect(shallowWrapper.state().selectedItemIndex).toEqual(1);
    shallowWrapper.instance()._handleCycle(-1);
    expect(shallowWrapper.state().selectedItemIndex).toEqual(0);
  });
});
