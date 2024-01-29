import * as THREE from 'three';

// create Scene 

const scene = new THREE.Scene(); 

scene.background = new THREE.Color('skyblue'); 

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); 

 

// create Camera 

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); 

camera.position.x = -1; 

camera.position.z = 13; 

camera.position.y = 3; 

 

// Renderer  

const renderer = new THREE.WebGLRenderer(); 

renderer.setSize(window.innerWidth, window.innerHeight); 

document.body.appendChild(renderer.domElement); 

 

// plane geometry 

const geometry = new THREE.PlaneGeometry( 5, 5 ); 

const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} ); 

const plane = new THREE.Mesh( geometry, material ); 

scene.add(plane); 

function animate() { 

    requestAnimationFrame(animate); 
    plane.rotation.x += 0.01; 
    plane.rotation.z += 0.01; 
    renderer.render(scene, camera); 
    } 

animate();