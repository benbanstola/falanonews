import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import {Router} from 'react-router-dom';
import reducers from './reducers/index';
import Routes from './Routes/routes';
import {reduxFirestore,getFirestore} from 'redux-firestore';
import {ReactReduxFirebaseProvider,getFirebase} from 'react-redux-firebase';
import firebaseConfig from './firebase/index';
import firebase from 'firebase/app';
import { createFirestoreInstance } from 'redux-firestore'
import history from './actions/history';

const store = createStore(
  reducers,
  compose(applyMiddleware(reduxThunk.withExtraArgument({getFirebase,getFirestore})),
  reduxFirestore(firebase,firebaseConfig)));

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router history={history}>
        <Routes/>
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.querySelector('#root')
);