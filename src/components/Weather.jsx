import React from 'react';
import './Weather.css';
import { useSelector } from 'react-redux';
const Weather = () => {
    const {loading , data, error} = useSelector(state=>state);
    console.log({loading , data, error});
    return (
        <>
        {loading ? (
            <div className='d-flex justify-content-center align-items-center'>
                <div className="spinner-border text-danger text-center" role="status">
                    <span className="visually-hidden">در حال دریافت اطلاعات</span>
                </div>
            </div>
        ) : data.main ? (
            <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                <div className='degree d-flex justify-content-center align-align-items-start'>
                    <h1 dir='ltr'> {Math.round(data.main.temp)} <span>&#176;</span>C</h1>
                </div>
                <div className='status mt-5 d-flex flex-column justify-content-center align-items-center'>
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.name} />
                    <h2>{data.weather[0].main}</h2>
                </div>
            </div>
        ) : error ? (
            <h3 className='text-center text-danger'>لطفا نام شهر یا کشور را به درستی وارد کنید!</h3>
        ) : (
            <h3 className='text-center text-warning'>لطفا نام شهر یا کشور را وارد کنید</h3>
        )}
        </>
        
        
    );
}

export default Weather;
