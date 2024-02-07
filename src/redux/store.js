import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
// import { combineReducers } from '@reduxjs/toolkit';
// import { thunk } from 'redux-thunk'
import weatherReducer from './weatherReducer';
import { composeWithDevTools } from '@redux-devtools/extension'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from '../components/weatherSaga';
// import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
// import getDefaultMiddleware from '@reduxjs/toolkit/dist/getDefaultMiddleware'

const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(weatherReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)) );

sagaMiddleware.run(watcherSaga);
// const reducer = combineReducers({
//     weatherReducer
// });
// const store = configureStore({
//     reducer,
//     middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(sagaMiddleware)
    
// })

export default store;