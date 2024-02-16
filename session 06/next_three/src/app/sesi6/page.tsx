"use client"

import { CameraControls, KeyboardControls, OrbitControls, useKeyboardControls } from '@react-three/drei';
import { Canvas, MeshBasicMaterialProps, RingGeometryProps, ThreeElements, useFrame, extend } from '@react-three/fiber'
import { CapsuleCollider, RigidBody, useRapier } from '@react-three/rapier';
import React, { useState, useEffect, useRef } from 'react';
import THREE, { BoxGeometry, ConeGeometry, Mesh } from 'three'
import { color } from 'three/examples/jsm/nodes/Nodes.js';
extend({ ConeGeometry })

// function player(lerp = THREE.MathUtils.lerp){
//   const ref = useRef<Mesh>(null!);
//   const [, get] = useKeyboardControls();

//   useFrame((state)=> {
//     const { forward, backward, left, right, jump } = get();
//     const velocity = ref.current.lin
//     state.camera.position.set(...ref.current.translateX());
//   });
// }


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
                <KeyboardControls 
                map={[
                    { name: "forward", keys: ["ArrowUp", "w", "W"] },
                    { name: "backward", keys: ["ArrowDown", "s", "S"] },
                    { name: "left", keys: ["ArrowLeft", "a", "A"] },
                    { name: "right", keys: ["ArrowRight", "d", "D"] },
                    { name: "jump", keys: ["Space"] },
                  ]}
                >
                <Canvas style={{ background: "hotpink" }}>
                
                <RotationMesh />
                
                <ambientLight intensity={0.9} />
                <directionalLight />
                <OrbitControls/>
                <CameraControls makeDefault />
            </Canvas>
                </KeyboardControls>
           
                
            </div>
        </>
    )

}


  
