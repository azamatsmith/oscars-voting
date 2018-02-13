import React from 'react';
import PropTypes from 'prop-types';
import {BackHandler} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';

import rootReducer from './src/reducers';
import AppWithNavigationState from './src/navigators';
import {middleware} from './src/utils/redux';

// Set Env variables
if (process.env.NODE_ENV !== 'test') {
  const env = require('./env.js');
  env();
}

const store = createStore(rootReducer, applyMiddleware(middleware, thunk));

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
      apiKey: process.env.API_KEY,
      authDomain: 'oscars-29f50.firebaseapp.com',
      databaseURL: 'https://oscars-29f50.firebaseio.com',
      projectId: 'oscars-29f50',
      storageBucket: '',
      messagingSenderId: '695218268092',
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
