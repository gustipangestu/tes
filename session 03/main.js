import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = -1;
camera.position.z = 13;
camera.position.y = 3;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    name: 'material-1',
    opacity: 0.5,
    transparency: false,
});

const geometry = new THREE.CylinderGeometry(3,3,4);

const cube = new THREE.Mesh( geometry, material );
cube.position.x = 5;
cube.position.y=0;
cube.position.z=1;
scene.add(cube)

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    // cube.rotation.y += 0.001;
    cube.rotation.z += 0.01;
    renderer.render(scene, camera);
}

animate();