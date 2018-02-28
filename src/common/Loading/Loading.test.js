import React from 'react';
import Loading from './';

import renderer from 'react-test-renderer';

describe('<Loading />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Loading />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
