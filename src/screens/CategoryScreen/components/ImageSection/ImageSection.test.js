import React from 'react';
import { shallow } from 'enzyme';
import ImageSection from './';

describe('<ImageSection />', () => {
  const props = {
    source:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNTU4MjMwOTgyMV5BMl5BanBnXkFtZTgwODQzNjY2NDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
  };

  const shallowWrapper = shallow(<ImageSection {...props} />);

  it('renders without crashing', () => {
    expect(shallowWrapper.find('Image').length).toEqual(1);
  });
});
