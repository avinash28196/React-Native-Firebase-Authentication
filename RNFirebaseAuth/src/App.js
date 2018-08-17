import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View, Text } from 'react-native';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDY3JIt551f2Su8dLGzvGjDOrgJMcKOD3g',
      authDomain: 'manager-44ab5.firebaseapp.com',
      databaseURL: 'https://manager-44ab5.firebaseio.com',
      projectId: 'manager-44ab5',
      storageBucket: 'manager-44ab5.appspot.com',
      messagingSenderId: '74884900126'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
