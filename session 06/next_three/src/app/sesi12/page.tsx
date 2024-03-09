"use client"
import { Sky } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { Controllers, Hands, Interactive, RayGrab, VRButton, XR } from '@react-three/xr'
import { PointLight } from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'



function ExportedModel() {
  const gltf = useLoader(GLTFLoader, '/model/shiba.glb')
  return (
    
    <mesh
      onClick={(event) => {
        console.log("di klik inii")
      }}
    >

      <primitive object={gltf.scene} />


    </mesh>

  )

}

function App() {
  return (
    <>
      <div className='w-dvh h-dvh'>
      <VRButton />
      <Canvas style={{ background: "hotpink" }}>
      <Sky/>
      <ambientLight/>
        <XR>
          <Controllers
            rayMaterial={{ color: 'blue' }}
          />
          <Hands />
          <mesh>
            <RayGrab>
              <ExportedModel />
              <meshStandardMaterial color="black" />
            </RayGrab>
          </mesh>
        </XR>
      </Canvas>
      </div>
    </>
    
  )
}

export default App