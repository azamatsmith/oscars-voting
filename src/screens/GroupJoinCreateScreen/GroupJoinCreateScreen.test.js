import React from 'react';
import GroupJoinCreateScreen from './';

import renderer from 'react-test-renderer';

describe('<GroupJoinCreateScreen />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<GroupJoinCreateScreen />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
