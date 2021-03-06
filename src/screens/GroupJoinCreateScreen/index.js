import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Button, Input, MainView } from 'src/common';

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

  state = { textValue: '' };

  // PRIVATE
  _navigate = newGroup => {
    const { navigation } = this.props;
    //Will Navigate to a new screen in after implemented
    newGroup
      ? navigation.navigate('CreateGroupScreen')
      : navigation.navigate('LandingScreen');
  };

  _onInputChange = textValue => {
    this.setState({ textValue });
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

        <Input
          errorText="There was an error"
          label="Input Field"
          onChangeText={this._onInputChange}
          placeholder="Type your text here"
          value={this.state.textValue}
        />
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
