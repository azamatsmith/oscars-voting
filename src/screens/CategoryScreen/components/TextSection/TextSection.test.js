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

  const noLinkProps = {
    data: {
      name: 'No Link Title',
      link: '',
    },
  };

  const shallowWrapper = shallow(<TextSection {...props} />);
  const noLinkWrapper = shallow(<TextSection {...noLinkProps} />);

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

  it('should display the movie title', () => {
    const title = shallowWrapper
      .find('AppText')
      .at(0)
      .render()
      .text();
    expect(title).toEqual('A Movie Title');
  });

  it('should display a link when one is provided', () => {
    const link = shallowWrapper.find('TouchableOpacity');
    expect(link.length).toEqual(1);
  });

  it('should not display a link when one is not provided', () => {
    const link = noLinkWrapper.find('TouchableOpacity');
    expect(link.length).toEqual(0);
  });

  it('should not display a link when one is not provided', () => {
    const fn = shallowWrapper.instance()._openLink;
    expect(() => fn()).not.toThrow();
  });
});
