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
  const loadingProps = { ...props, categoryData: [] };

  const shallowWrapper = shallow(<CategoryScreen {...props} />);
  const loadingWrapper = shallow(<CategoryScreen {...loadingProps} />);

  it('renders without crashing', () => {
    expect(shallowWrapper.find('MainView').length).toEqual(1);
  });

  it('_getWidth should return widths', () => {
    expect(shallowWrapper.instance()._getWidth).not.toBeNull();
    expect(shallowWrapper.instance()._getWidth().itemWidth).not.toEqual(0);
    expect(shallowWrapper.instance()._getWidth().sliderWidth).not.toEqual(0);
  });

  it('should render <Loading /> when category data length is 0', () => {
    expect(shallowWrapper.find('Loading').length).toEqual(1);
  });
});
