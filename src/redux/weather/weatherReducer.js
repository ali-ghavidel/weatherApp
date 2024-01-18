import { WEATHER_RECIEVE_ERROR, WEATHER_RECIEVE_RESPONSE, WEATHER_SEND_REQUEST } from "./weatherType";

const states = {
    loading: false,
    data: {},
    error: ''
}

const weatherReducer = (state = states, action) => {
    switch (action.type) {
        case WEATHER_SEND_REQUEST:
            return {...state, loading: true}
        case WEATHER_RECIEVE_RESPONSE:
            return {loading: false, data: action.payload, error: ""}
        case WEATHER_RECIEVE_ERROR:
            return {loading:false, data:{}, error: action.payload}
    
        default:
            return state;
    }
}

export default weatherReducer;