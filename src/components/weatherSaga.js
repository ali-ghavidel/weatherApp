// import { call, put, takeEvery } from 'redux-saga/effects';
// import { WEATHER_SEND_REQ } from '../redux/weatherTypes';
// import axios from 'axios';
// import { weatherRecieveErr, weatherRecieveRes } from '../redux/weatherActions';

// function getWatcherRequest(query){
//    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=675ae618174053b29e909a7e61f6cbf1`)
// }

// function* handlegetWatcher(action){
//     try{
//         const res = yield call(getWatcherRequest, action.payload)
//         yield put(weatherRecieveRes(res.data))
//     }catch (error){
//         yield put(weatherRecieveErr(error.message))
//     }
// }
// export function* watcherSaga(){
//     yield takeEvery(WEATHER_SEND_REQ, handlegetWatcher )
// }
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { WEATHER_SEND_REQ } from '../redux/weatherTypes'
import axios from 'axios'
import { weatherRecieveErr, weatherRecieveRes } from '../redux/weatherActions';

function getWeather(query){
   return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=675ae618174053b29e909a7e61f6cbf1`)
}

function* handleSagaActions(action){
    try {
        const res = yield call(getWeather,action.payload);
        yield put(weatherRecieveRes(res.data))
    } catch (error) {
        yield put(weatherRecieveErr(error.message))
    }
}
export function* watcherSaga(){
    yield takeLatest(WEATHER_SEND_REQ, handleSagaActions )
}