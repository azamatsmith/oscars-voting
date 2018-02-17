import React from 'react';
import {CategoryScreen} from './';

import renderer from 'react-test-renderer';

describe('<CategoryScreen />', () => {
  const props = {
    categoryData: [],
    fetchCategoryData: jest.fn(),
  };

  it('renders without crashing', () => {
    const rendered = renderer.create(<CategoryScreen {...props} />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
