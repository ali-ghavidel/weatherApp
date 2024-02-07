import { WEATHER_RECIEVE_ERR, WEATHER_RECIEVE_RES, WEATHER_SEND_REQ } from "./weatherTypes"
import axios from 'axios'
const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

export const weatherSendReq = (query) => {
    return {
        type: WEATHER_SEND_REQ,
        payload: query
    }
}
export const weatherRecieveRes = (data) => {
    return {
        type: WEATHER_RECIEVE_RES,
        payload: data
    }
}
export const weatherRecieveErr = (error) => {
    return {
        type: WEATHER_RECIEVE_ERR,
        payload: error
    }
}
// export const weatherGetCurrent = (query) => {
//     return (dispatch) => {
//         // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=675ae618174053b29e909a7e61f6cbf1`)
//         dispatch(weatherSendReq());
//         axios.get(`${apiUrl}?q=${query}&units=metric&appid=${apiKey}`)
//         .then((res)=>{
//             dispatch(weatherRecieveRes(res.data))
//         }).catch((error)=>{
//             dispatch(weatherRecieveErr(error.message))
//             // console.log(error);
//         })
//     }
// }