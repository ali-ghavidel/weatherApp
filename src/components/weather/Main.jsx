import React, { useEffect, useState } from 'react';
import SearchCity from '../SearchCity';
import Timer from '../Timer';
import Weather from '../Weather';
import './Main.css';
import { useSelector } from 'react-redux';

const Main = () => {
  const [background, setBackground] = useState("heat");
  const {data} = useSelector(state=>state);
  useEffect(()=>{
    if(data.main){
      data.main.temp > 20 ? setBackground("heat") : data.main.temp < 10 ? setBackground("snow") : setBackground("normal")
    }else{
      setBackground("normal")
    }
    
  },[data])
    return (
        <div className={`Main back-${background}`}>
        <SearchCity />
        <Timer />
        <Weather />
      </div>
    );
}

export default Main;
