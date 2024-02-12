import React from 'react';
import { useSelector } from 'react-redux';
import ClimateIcon from './ClimateIcon';
import Loading from './Loading';
import './App.css'
import Details from './Details';
const Temp = () => {
    const loading = useSelector(state=>state.loading);
    const data = useSelector(state=>state.data);
    const error = useSelector(state=>state.error);

    return (
        <>
        {loading ? (
            <Loading />
        ) : (data !== undefined && data.main) ? (
            <div className='d-flex flex-column temp'>
                <div className='status d-flex flex-column justify-content-center align-items-center'>
                    <ClimateIcon />
                    {/* <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.name} /> */}
                    <h5>{data.weather[0].description}</h5>
                </div>
                <div className='degree d-flex justify-content-center align-align-items-start'>
                    <h1 dir='ltr'> {Math.round(data.main.temp)}<span>&#176;</span></h1>
                </div>
                <div className='details'>
                    <Details />
                </div>
            </div>
        ) : error ? (
            <h3 className='text-center text-danger'>Please Search for a correct city name</h3>
        ) : (
            <h3 className='text-center text-warning'>Please Enter city/country name</h3>
        )}
        </>
        
        
    );
}

export default Temp;
