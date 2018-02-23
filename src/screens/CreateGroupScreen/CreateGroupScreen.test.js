import React from 'react';
import CreateGroupScreen from './';

import renderer from 'react-test-renderer';

describe('<CreateGroupScreen />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<CreateGroupScreen />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('has a function that generates a random number', () => {
    expectNotNull(shallowWrapper.instance()._randomGroupId());
  });

});
