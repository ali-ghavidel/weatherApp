import React, { useEffect, useState } from 'react';
import './Timer.css';
import moment from 'moment-jalaali';
const DayOfWeek = [
    'یکشنبه',
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه"
]

const MonthOfYear = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
]
const Timer = () => {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(()=>{
        let m = moment();
        setDate(`${DayOfWeek[m.day()]} ${m.jDate()} ${MonthOfYear[m.jMonth()]} ${m.jYear()}`);
            setTime(m.format("HH:mm"));
        
    },[])
    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
            <h3>{date}</h3>
            <h4>ساعت: {time}</h4>
        </div>
    );
}

export default Timer;
