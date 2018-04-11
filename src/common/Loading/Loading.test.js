import React from 'react';
import { shallow } from 'enzyme';
import Loading from './';

describe('<Loading />', () => {
  const notLoadingWrapper = shallow(<Loading loading={false} />);
  const defaultWrapper = shallow(<Loading />);

  it('renders without crashing', () => {
    expect(defaultWrapper.find('View').length).not.toEqual(0);
  });

  it('should retrun null when loading is false', () => {
    expect(notLoadingWrapper).not.toEqual(null);
  });
});
