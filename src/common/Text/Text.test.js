import React from 'react';
import Text from './';

import renderer from 'react-test-renderer';

describe('<Text />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Text />).toJSON();
    expect(rendered).toBeTruthy();
  });
});




