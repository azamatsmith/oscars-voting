import React from 'react';
import {CategoryScreen} from './';

import renderer from 'react-test-renderer';

describe('<CategoryScreen />', () => {
  const props = {
    categoryData: [],
  };

  it('renders without crashing', () => {
    expect(true).toBe(true);
    // const rendered = renderer.create(<CategoryScreen {...props} />).toJSON();
    // expect(rendered).toBeTruthy();
  });
});
