import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import Loading from './Loading';
import ClimateModel from './ClimateModel';
import { OrbitControls } from '@react-three/drei';

const ClimateIcon = () => {

    return (
        <Suspense fallback={<Loading />}>
            <Canvas className='climateCanvas' camera={{position: [0,1,6], fov: 75}}>
                <directionalLight position={[0,10,10]} intensity={3} />
                <OrbitControls />
                <ClimateModel />
            </Canvas>
        </Suspense>
    );
}

export default ClimateIcon;
