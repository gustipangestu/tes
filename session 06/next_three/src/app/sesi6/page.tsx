"use client"

import { OrbitControls } from '@react-three/drei';
import { Canvas, MeshBasicMaterialProps, RingGeometryProps, ThreeElements, useFrame, extend } from '@react-three/fiber'
import React, { useState, useEffect, useRef } from 'react';
import { BoxGeometry, ConeGeometry, Mesh } from 'three'
extend({ ConeGeometry })

function RotationMesh() {
    const meshRef = useRef<Mesh>(null!)


    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        meshRef.current.rotation.x = a;
        meshRef.current.rotation.y = a;
    })

    return (
        <>
            <mesh ref={meshRef}>
                <coneGeometry args={[2, 2, 9]} />
                <meshLambertMaterial color="green" />
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
                    <ambientLight intensity={3.9} />
                    <directionalLight />
                    <OrbitControls/>
                </Canvas>
            </div>
        </>
    )

}