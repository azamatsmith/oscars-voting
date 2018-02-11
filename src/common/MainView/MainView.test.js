import React from 'react';
import MainView from './';

import renderer from 'react-test-renderer';

describe('<MainView />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<MainView />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
