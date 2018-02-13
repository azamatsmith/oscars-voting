import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { MainView, Button } from 'src/common';

export default class GroupJoinCreateScreen extends Component {
  static navigationOptions = {
    title: 'Oscars Voting - 2018',
  };
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }),
  };

  static defaultProps = {};

  // PRIVATE
  _navigate = newGroup => {
    const { navigation } = this.props;
    //Will Navigate to a new screen in after implemented
    newGroup
      ? navigation.navigate('CreateGroupScreen')
      : navigation.navigate('LandingScreen');
  };

  render() {
    return (
      <MainView>
        <View style={styles.groupViewStyle}>
          <Button
            onPress={() => this._navigate(true)}
            style={styles.buttonStyle}
            text="Create Group"
          />
          <Button
            onPress={() => this._navigate(false)}
            style={styles.buttonStyle}
            text="Join Group"
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

  buttonStyle: {
    borderWidth: 1,
  },
});
