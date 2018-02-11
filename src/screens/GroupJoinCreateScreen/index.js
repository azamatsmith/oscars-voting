import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { MainView, Button } from 'src/common';

export default class GroupJoinCreateScreen extends Component {
  static navigationOptions = {
    title: 'Oscars Voting - 2018',
  };
  static propTypes = {};
  static defaultProps = {};

  // PRIVATE
  _navigate = ({ newGroup }) => {
    const { navigation } = this.props;
    //Will Navigate to a new screen in after implemented
    newGroup
      ? navigation.navigate('LandingScreen')
      : navigation.navigate('LandingScreen');
  };

  render() {
    return (
      <MainView>
        <View style={styles.groupViewStyle}>
          <Button
            text="Create Group"
            style={styles.buttonStyle}
            onPress={() => this._navigate(true)}
          />
          <Button
            text="Join Group"
            style={styles.buttonStyle}
            onPress={() => this._navigate(false)}
          />
        </View>
      </MainView>
    );
  }
}

// Export class so that you do not have to mount redux store in tests
export { GroupJoinCreateScreen };

const styles = StyleSheet.create({
  groupViewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    textSize: 20,
  },

  buttonStyle: {
    borderWidth: '1',
  },
});
