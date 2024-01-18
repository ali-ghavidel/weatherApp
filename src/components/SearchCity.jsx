import React, { useState } from 'react';
import './SearchCity.css';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../redux/weather/weatherAction';
const SearchCity = () => {

    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const {data} = useSelector(state=>state);

    const handleSumbitForm = (e) => {
        e.preventDefault();
        dispatch(getWeather(query));
        setQuery('');
    }
    return (
        <form onSubmit={handleSumbitForm} className='w-70 d-flex justify-content-center' dir='ltr'>
            <div className="input-group mt-5 w-50">
            <input className='form-control' type='text' placeholder={ data.name ||' نام شهر یا کشور ...'}
            value={query} onChange={e=>setQuery(e.target.value)}
            />
            <div className="input-group-append">
                <button className="btn btn-success text-light" type="submit">جستجو</button>
            </div>
            
            </div>
            
        </form>
    );
}

export default SearchCity;
