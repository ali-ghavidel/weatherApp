import React, { Suspense } from 'react';
import Search from './Search';
import Date from './Date';
import Temp from './Temp';
import Loading from './Loading';


const Main = () => {
    
    
    return (
        <Suspense fallback={<Loading />}>
            <Search />
            <Date />
            <Temp />
        </Suspense>
    );
}

export default Main;
