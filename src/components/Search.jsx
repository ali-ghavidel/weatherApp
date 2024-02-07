import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { weatherGetCurrent, weatherSendReq } from '../redux/weatherActions';
import style from './Search.module.css';

const Search = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(weatherGetCurrent(city));
        dispatch(weatherSendReq(city));
    }
    return (
        <div>
            <div className={`input-group mb-3  mx-auto ${style.SearchArea} `}>
                <input type="text" className="form-control" value={city} onChange={(e)=>setCity(e.target.value)} placeholder='City/Country name...' />
                <button className={`btn btn-outline-success`} type='submit' onClick={handleSubmit}>Search</button>
            </div>
        </div>
    );
}

export default Search;
