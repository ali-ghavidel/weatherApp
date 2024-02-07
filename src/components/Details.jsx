import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind ,faDroplet, faTemperatureLow, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
const Details = () => {
    const data = useSelector(state=>state.data);
    // console.log(data);
    return (
        <div className="row mt-3">
            <div className="col-3 text-center d-flex flex-column justify-content-between align-items-center">
            <FontAwesomeIcon icon={faWind} className='mb-3' />
            <p>{data.wind.speed} <span style={{fontSize: "0.5rem"}}>m/s</span></p>
            </div>
            <div className="col-3 text-center d-flex flex-column justify-content-between align-items-center">
            <FontAwesomeIcon icon={faDroplet} className='mb-3' />
            <p>{data.main.humidity} %</p>
            </div>
            <div className="col-3 text-center d-flex flex-column justify-content-between align-items-center">
            <FontAwesomeIcon icon={faTemperatureLow} className='mb-3' />
            <p>{Math.round(data.main.temp_min)}<span>&#176;</span></p>
            </div>
            <div className="col-3 text-center d-flex flex-column justify-content-between align-items-center">
            <FontAwesomeIcon icon={faTemperatureHigh} className='mb-3' />
            <p>{Math.round(data.main.temp_max)}<span>&#176;</span></p>
            </div>
            
        </div>
    );
}

export default Details;
