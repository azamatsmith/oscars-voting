import React from 'react';
import { shallow } from 'enzyme';
import TextSection from './';

describe('<TextSection />', () => {
  const props = {
    data: {
      name: 'A Movie Title',
      link: 'http://www.youtube.com',
    },
  };

  const shallowWrapper = shallow(<TextSection {...props} />);

  it('renders without crashing', () => {
    expect(shallowWrapper.find('View').length).toEqual(1);
  });

  it('should display the movie title', () => {
    const title = shallowWrapper
      .find('AppText')
      .at(0)
      .render()
      .text();
    expect(title).toEqual('A Movie Title');
  });
});
