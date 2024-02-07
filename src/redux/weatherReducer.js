import { WEATHER_RECIEVE_ERR, WEATHER_RECIEVE_RES, WEATHER_SEND_REQ } from "./weatherTypes";


const initState = {
    loading: false,
    data: {},
    error: ''
}

const weatherReducer = (state = initState, action) =>{
    switch (action.type) {
        case WEATHER_SEND_REQ:
            return {...state, loading: true};
        case WEATHER_RECIEVE_RES:
            console.log(action.payload);
            return {loading: false, data: action.payload, error: ""}
        case WEATHER_RECIEVE_ERR:
            return {loading: false, data: {}, error: action.payload}
    
        default:
            return state;
    }
}

export default weatherReducer;