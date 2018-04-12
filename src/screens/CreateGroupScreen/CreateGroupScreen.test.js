import React from 'react';
import CreateGroupScreen from './';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('<CreateGroupScreen />', () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
    },
  };

  const shallowWrapper = shallow(<CreateGroupScreen {...props} />);

  it('renders without crashing', () => {
    const rendered = renderer.create(<CreateGroupScreen />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('has a function that generates a random number', () => {
    const groupId = shallowWrapper.instance()._randomGroupId();
    expect(groupId).toBeGreaterThan(0);
  });
});
