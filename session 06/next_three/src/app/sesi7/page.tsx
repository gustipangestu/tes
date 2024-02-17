"use client"

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import * as THREE from "three";



const ThreeScene: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null!);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            containerRef.current?.appendChild(renderer.domElement);
            camera.position.z = 5;

            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: "skyblue" });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            const animate = () => {
                requestAnimationFrame(animate);
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render(scene, camera);
            };
            animate();

        }
    }, []);
    return <div ref={containerRef} />;
};

function sesi7(){
    const router = useRouter();
    const hanleClick=()=>{
        router.push('/sesi6');
    };

    return (
        <>
            <div>
                <button onClick={hanleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Move
                </button>
            </div>
            <div>
                <ThreeScene/>
            </div>
        </>
    );
}

export default sesi7;