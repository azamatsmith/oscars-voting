import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addNavigationHelpers, StackNavigator} from 'react-navigation';

// MTS - Add additional screens here
import CategoryScreen from '../screens/CategoryScreen';
import CreateGroupScreen from '../screens/CreateGroupScreen';
import GroupJoinCreateScreen from '../screens/GroupJoinCreateScreen';
import LandingScreen from '../screens/LandingScreen';
import {addListener} from '../utils/redux';

export const AppNavigator = StackNavigator(
  {
    CategoryScreen: {screen: CategoryScreen},
    CreateGroupScreen: {screen: CreateGroupScreen},
    GroupJoinCreateScreen: {screen: GroupJoinCreateScreen},
    LandingScreen: {screen: LandingScreen},
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#6b52ae',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const {dispatch, nav} = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
