import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { MainView, Text, Button } from 'src/common';
import firebase from 'firebase';

export default class CreateGroupScreen extends Component {

  state = {userName:"", groupName:""}

  static navigationOptions = {
    title: 'Oscars Voting - 2018',
  };

  static propTypes = {
    navigation: PropTypes.any,
  };

  static defaultProps = {  };

  // PRIVATE
  _randomGroupId = () => {return Math.floor(1000 + Math.random() * 9000)};

  //Method for firebase add group
  _createGroup = () => {
    
    var dbRef = firebase.database();

    //Get unique key for group
    var groupKey = dbRef
      .ref()
      .child('groups')
      .push().key;

    //Create Group
    dbRef.ref('groups/' + groupKey).set({
      name: this.groupName,
      groupId: this._randomGroupId(),
    });

    //Create User
    dbRef.ref('users/' + this.userName).set({
      name: this.userName,
      admin: true,
      groupId: groupKey,
    });
  };

  render() {
    return (
      <MainView>
        <View style={styles.groupViewStyle}>
          <Text> Create a new group. </Text>
          <Text> Enter group. </Text>
          <Button
            onPress={() => this._createGroup()}
            style={styles.buttonStyle}
            text="Create Group"
          />
        </View>
      </MainView>
    );
  }
}

// Export class so that you do not have to mount redux store in tests
export { CreateGroupScreen };

const styles = StyleSheet.create({
  groupViewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
