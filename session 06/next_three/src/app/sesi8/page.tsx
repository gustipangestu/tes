"use client"

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { DragControls, GLTF } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



const shiba: React.FC = () => {
    let shibaModel: any;
    const containerRef = useRef<HTMLDivElement>(null!);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const scene = new THREE.Scene();
            scene.background = new THREE.Color("red");
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            containerRef.current?.appendChild(renderer.domElement);
            camera.position.z = 5;

            

            let loader = new GLTFLoader();
            loader.load(
                '/model/shiba.glb',
                function (gltf) {
                    shibaModel = gltf.scene;
                    gltf.animations; // Array<THREE.AnimationClip>
                    gltf.scene; // THREE.Group
                    gltf.scenes; // Array<THREE.Group>
                    gltf.cameras; // Array<THREE.Camera>
                    gltf.asset; // Object
                    renderer.render(scene, camera);
                    scene.add(gltf.scene);
                    
                    animate();
                },
                (xhr) => {
                    console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
                },
                (error) => {
                    console.log(error)
                }
            );
            const animate = () => {
                requestAnimationFrame(animate);
                shibaModel.rotation.x += 0.01;
                shibaModel.rotation.y += 0.001;
                renderer.render(scene, camera);
            }
            const controls = new DragControls(shibaModel, camera, renderer.domElement);
        }
    }, []);



    return (
        <div ref={containerRef}/>
    );
};

export default shiba;