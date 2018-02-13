import React from 'react';
import CreateGroupScreen from './';

import renderer from 'react-test-renderer';

describe('<CreateGroupScreen />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<CreateGroupScreen />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
