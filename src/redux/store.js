import {applyMiddleware, legacy_createStore} from 'redux'
import weatherReducer from './weather/weatherReducer'
import { composeWithDevTools } from '@redux-devtools/extension'
import { thunk } from 'redux-thunk';

const store = legacy_createStore(weatherReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;