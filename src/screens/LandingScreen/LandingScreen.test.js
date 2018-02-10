import React from 'react';
import LandingScreen from './';

import renderer from 'react-test-renderer';

describe('<LandingScreen />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<LandingScreen />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
