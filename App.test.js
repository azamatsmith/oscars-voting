import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('<App />', () => {
  const props = {};

  const shallowWrapper = shallow(<App {...props} />);

  it('renders without crashing', () => {
    expect(shallowWrapper.find('Provider').length).toEqual(1);
  });
});
