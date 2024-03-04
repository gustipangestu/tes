"use client"

import { CameraControls, OrbitControls } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { Physics } from "@react-three/rapier"
import { Suspense } from "react"
import { GLTFLoader } from "three/examples/jsm/Addons.js"


function ExportedModel(){
    const gltf = useLoader(GLTFLoader, '/model/shiba.glb')
    return (
        <mesh
        onClick={(event)=>{
            console.log("di klik inii")
        }}
        >

            <primitive object={gltf.scene}/>


        </mesh>
        
    )

}

function App(){
    return(
        <>
        <div className='w-dvh h-dvh'>
        <Canvas style={{ background: "hotpink" }}>
                        <Suspense>
                            <Physics debug>
                                <ExportedModel/>
                                <ambientLight intensity={0.9} />
                                <directionalLight />
                                <OrbitControls />
                                <CameraControls makeDefault />
                                
                            </Physics>
                        </Suspense>
                    </Canvas>
        </div>
        </>
    )
}

export default App