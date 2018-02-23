import React from 'react';
import CreateGroupScreen from './';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


describe('<JoinGroupScreen />', () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
    },
  };

  const shallowWrapper = shallow(<JoinGroupScreen {...props} />);

  it('renders without crashing', () => {
    const rendered = renderer.create(<JoinGroupScreen />).toJSON();
    expect(rendered).toBeTruthy();
  });

});
