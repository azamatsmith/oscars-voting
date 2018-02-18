// Set Env variables
if (process.env.NODE_ENV !== 'test') {
  const env = require('./env.js');
  env();
}

import React from 'react';
import PropTypes from 'prop-types';
import {BackHandler} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import firebase from 'firebase';

import rootReducer from './src/reducers';
import AppWithNavigationState from './src/navigators';
import {middleware} from './src/utils/redux';

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(middleware, thunk))
);

class App extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    nav: PropTypes.object,
  };

  static defaultProps = {
    dispatch: () => null,
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._onBackPress);

    // make sure not to initialize firebase apps more than once
    if (firebase.apps.length > 0) {
      return;
    }

    const config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    };

    firebase.initializeApp(config);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBackPress);
  }

  _onBackPress = () => {
    const {dispatch, nav} = this.props;
    // nav.index 0 means you are at the bottom of the navigation stack
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
