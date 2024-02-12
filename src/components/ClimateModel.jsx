import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

const ClimateModel = () => {
    const data = useSelector(state=>state.data.weather[0].main).toLowerCase();
    let src = '';
    let scale = 0.1;
    switch (data) {
        case 'clouds':
            src = './weather/cloud/cl.gltf';
            scale = 0.8
            break;
        case 'clear':
            src = './weather/sun/sun.gltf';
            scale = 0.2;
            break;
        case 'rain':
            src = './weather/rain/rain.gltf';
            scale = 0.3;
            break;
        case 'snow':
            src = './weather/snow/snow.gltf';
            scale = 0.3;
            break;
        case 'mist':
            src = './weather/fog/scene.gltf';
            scale = 1;
            break;
        case 'haze':
            src = './weather/fog/scene.gltf';
            scale = 1;
            break;
        default:
            break;
    }
    const demo = useGLTF(src);
    const shapeRef = useRef();

    useFrame(()=>{
        shapeRef.current.rotation.y += 0.01;
    })

    return (
        <mesh scale={scale} position={[0,-2,0]} ref={shapeRef} >
                <primitive object={demo.scene} />
        </mesh>
    );
}

export default ClimateModel;
