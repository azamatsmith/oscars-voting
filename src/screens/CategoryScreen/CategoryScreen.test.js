import React from 'react';
import { shallow } from 'enzyme';
import { CategoryScreen } from './';

describe('<CategoryScreen />', () => {
  const props = {
    categoryData: [],
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
});
