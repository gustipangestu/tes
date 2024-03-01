"use client"

import { CameraControls, KeyboardControls, OrbitControls, useKeyboardControls } from '@react-three/drei';
import { Canvas, MeshBasicMaterialProps, RingGeometryProps, ThreeElements, useFrame, extend, useThree } from '@react-three/fiber'
import { CapsuleCollider, CuboidCollider, Physics, RigidBody, useRapier } from '@react-three/rapier';
import { useDrag } from '@use-gesture/react';
import React, { useState, useEffect, useRef, Suspense } from 'react';
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
    const [position, setPosition] = useState([0, 0, 0]);
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;


    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
    })

    const bind:any = useDrag(
        ({ offset: [x, y] }) => {
          const [, , z] = position;
          setPosition([x / aspect, -y / aspect, z]);
        },
      );

    return (
        console.log(hovered),
        <>

            <mesh 
            position={position}
            {...bind()}
            ref={meshRef}
            receiveShadow 
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}
            >
                <coneGeometry args={[2, 2, 9]} />
                {/* <meshPhysicalMaterial color={'blue'} /> */}
                <meshStandardMaterial color={hovered ? "skyblue" : "orange"}
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
                        <Suspense>
                            <Physics debug>
                                <RotationMesh />

                                <ambientLight intensity={0.9} />
                                <directionalLight />
                                {/* <OrbitControls /> */}
                                {/* <CameraControls makeDefault /> */}
                                <CuboidCollider position={[0, -2, 0]} args={[20, 0.5, 20]} />
                            </Physics>
                        </Suspense>
                    </Canvas>
                </KeyboardControls>


            </div>
        </>
    )

}



