import React from 'react';
import CategoryItem from './';

import renderer from 'react-test-renderer';

describe('<CategoryItem />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<CategoryItem />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
