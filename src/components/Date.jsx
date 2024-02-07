import React, { useEffect, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Date = () => {
    const [date, setDate] = useState('');
    const data = useSelector(state=>state.data);
    useEffect(()=>{
        const cdate = new window.Date();
        const day = days[cdate.getDay()]
        const month = months[cdate.getMonth()]
        const year = new window.Date().toLocaleDateString('en', {year: '2-digit'});
        setDate(`${day}, ${month} ${year}`)
    },[])
    
    
    return (
        <div className="date_card mb-1">
            <h2>
                {date}
            </h2>
            {data && data.sys ? (
                <h3 className="city">{data.name}, <span>{data.sys.country}</span></h3>
            ) : ( <></> )}
        </div>
        
    );
}

export default Date;
