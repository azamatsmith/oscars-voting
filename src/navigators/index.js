import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

// MTS - Add additional screens here
// import LoginScreen from '../components/LoginScreen';
// import MainScreen from '../components/MainScreen';
import LandingScreen from '../screens/LandingScreen';
import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator({
  LandingScreen: { screen: LandingScreen },
  // Main: { screen: MainScreen },
  // Profile: { screen: ProfileScreen },
});

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props;
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
