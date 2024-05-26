import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import './engine.css'

import Engine from './Engine';

function Engines() {
    
    return (
        <div className="engine-container">
    
        <div className="engine-overlay">
            <h1>View the source of what powers these incredible machines.</h1>
            <p>(Left click to rotate, right click to pan, or zoom in/out.)</p>
        </div>
        <Canvas className="engineCanvas" camera={{ position: [-10, 10, 5]}}>
            <ambientLight intensity={1}/>
            <directionalLight position={[0, 0, 0]} intensity={2}/>
            <OrbitControls/>
            <Suspense fallback={null}>
                <Engine/>
            </Suspense>
            <Environment preset="sunset"/>
        </Canvas>
        
        
        </div>
    )
}

export default Engines;