import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MainView, Button } from 'src/common';

export default class GroupJoinCreateScreen extends Component {
  static propTypes = {};
  static defaultProps = {};

  // PRIVATE

  render() {
    return (
      <MainView>
          <Button text="Create Group" />
          <Button text="Join Group" />
      </MainView>
    );
  }
}
