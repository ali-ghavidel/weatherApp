import React from 'react';
import './Weather.css';
const Weather = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
            <div className='degree d-flex justify-content-center align-items-center'>
                <h1>15 C</h1>
            </div>
            <div className='status mt-5'>
                <h2>cloudy</h2>
            </div>
        </div>
    );
}

export default Weather;
