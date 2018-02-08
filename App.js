import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import env from './env.js';

import rootReducer from './src/reducers';
import AppWithNavigationState from './src/navigators';
import {middleware} from './src/utils/redux';

// Set Env variables
env();

const store = createStore(rootReducer, applyMiddleware(middleware));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
