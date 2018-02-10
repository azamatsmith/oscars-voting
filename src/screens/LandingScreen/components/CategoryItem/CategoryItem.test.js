import React from 'react';
import CategoryItem from './';

import renderer from 'react-test-renderer';

describe('<CategoryItem />', () => {
  const props = {
    category: 'test category',
  };

  it('renders without crashing', () => {
    const rendered = renderer.create(<CategoryItem {...props} />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
