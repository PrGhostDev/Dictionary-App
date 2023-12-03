// configureStore.js
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import dictionaryReducer from '../reducers/dictionaryReducer'; 

const store = createStore(dictionaryReducer, applyMiddleware(thunk));

export default store;
