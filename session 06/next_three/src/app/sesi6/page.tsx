"use client"

import { Canvas, MeshBasicMaterialProps, RingGeometryProps, ThreeElements, useFrame, extend } from '@react-three/fiber'
import React, { useState, useEffect, useRef } from 'react';
import { BoxGeometry, Mesh } from 'three'
extend({ BoxGeometry })

function RotationMesh(){
    const meshRef = useRef<Mesh>(null!)
    

    useFrame( ({clock}) => {
        const a = clock.getElapsedTime();
        meshRef.current.rotation.x = a;
    })
    
    return (
        <>
        <mesh ref={meshRef}>
          <boxGeometry />
          <meshPhongMaterial color="royalblue" />
        </mesh>
        </>
      );
    
}

export default function sesi6() {
    
    return (
        <>
            <div className='w-dvh h-dvh'>
            <Canvas>
        <RotationMesh />
        <ambientLight intensity={0.1} />
        <directionalLight />
      </Canvas>
            </div>
        </>
    )

}