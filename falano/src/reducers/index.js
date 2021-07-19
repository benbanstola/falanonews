import { combineReducers } from 'redux';
import {firestoreReducer} from 'redux-firestore';
import authreducer from './authreducer';
import {firebaseReducer} from 'react-redux-firebase';
import createpostreducer from './createpostreducer';
import singlepostreducer from './singlepostreducer';
import newsreducer from './newsreducer';
import adreducer from './ad';
export default combineReducers({
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth:authreducer,
    createpost:createpostreducer,
    singlepost:singlepostreducer,
    newserror:newsreducer,
    adhandler:adreducer,
})