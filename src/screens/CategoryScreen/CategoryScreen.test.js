import React from 'react';
import CategoryScreen from './';

import renderer from 'react-test-renderer';

describe('<CategoryScreen />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<CategoryScreen />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
