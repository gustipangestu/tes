"use client"

import { OrbitControls } from '@react-three/drei';
import { Canvas, MeshBasicMaterialProps, RingGeometryProps, ThreeElements, useFrame, extend } from '@react-three/fiber'
import React, { useState, useEffect, useRef } from 'react';
import THREE, { BoxGeometry, ConeGeometry, Mesh } from 'three'
import { color } from 'three/examples/jsm/nodes/Nodes.js';
extend({ ConeGeometry })



function RotationMesh() {
    
    const meshRef = useRef<Mesh>(null!)
    const [hovered, setHover] = useState(false);
    

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
    })

       
    
    return (
        console.log(hovered),
        <>
         
            <mesh receiveShadow  ref={meshRef} 
           onPointerOver={(event) => setHover(true)}
           onPointerOut={(event) => setHover(false)}
            >
                <coneGeometry args={[2, 2, 9]} />
                {/* <meshPhysicalMaterial color={'blue'} /> */}
                <meshStandardMaterial color={hovered ? "skyblue" : "orange" } 
                roughness={0} metalness={0.8} envMapIntensity={2} 
                />
                
            </mesh>
            
        </>
    );

}

export default function sesi6() {

    return (
        <>
            <div className='w-dvh h-dvh'>
                <Canvas style={{ background: "hotpink" }}>
                
                    <RotationMesh />
                    
                    <ambientLight intensity={3.9} />
                    <directionalLight />
                    <OrbitControls/>
                </Canvas>
            </div>
        </>
    )

}


  
