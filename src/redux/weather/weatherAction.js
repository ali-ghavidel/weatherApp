import { WEATHER_RECIEVE_ERROR, WEATHER_RECIEVE_RESPONSE, WEATHER_SEND_REQUEST } from "./weatherType"
import axios from 'axios';

export const weatherSendRequest = () => {
    return { type: WEATHER_SEND_REQUEST};
}

export const weatherRecieveResponse = (data) => {
    return { type: WEATHER_RECIEVE_RESPONSE, payload: data}
}

export const weatherRecieveError = (error) => {
    return { type: WEATHER_RECIEVE_ERROR, payload: error}
}

export const getWeather = (query) => {
    return (dispatch) => {
        dispatch(weatherSendRequest());
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=675ae618174053b29e909a7e61f6cbf1`)
        .then(res=> {
            dispatch(weatherRecieveResponse(res.data));
        })
        .catch(err=>{
            dispatch(weatherRecieveError(err.message));
        })
    }
}