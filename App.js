import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'src/reducers';
import Landing from 'src/screens/Landing';


class App extends Component {
  render() {
    const store = createStore(rootReducer);
    return (
      <Provider store={store}>
        <Landing />
      </Provider>
    );
  }
}

export default App;
