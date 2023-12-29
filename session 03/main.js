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

// mesh basic material
// const material = new THREE.MeshBasicMaterial({
//     color: 0xffffff,
//     name: 'material-1',
//     opacity: 0.5,
//     transparency: false,
// });


const material = new THREE.ShaderMaterial({
    color: 0xffffff,
    name: 'material-1',
    opacity: 0.1,
    transparency: true,
});

//tes

const geometry = new THREE.TorusGeometry(1,-3,11);

const cube = new THREE.Mesh( geometry, material );
cube.position.x = 0;
cube.position.y=0;
cube.position.z=1;
scene.add(cube)

const cube2 = new THREE.Mesh( geometry, material );
cube2.position.x = 10;
cube2.position.y=0;
cube2.position.z=1;
scene.add(cube2)

const cube3 = new THREE.Mesh( geometry, material );
cube3.position.x = -10;
cube3.position.y=0;
cube3.position.z=1;
scene.add(cube3)

function animate() {
    requestAnimationFrame(animate);
    cube2.rotation.x += 0.01;
    // cube.rotation.y += 0.001;
    cube2.rotation.z += 0.01;
    renderer.render(scene, camera);
}

animate();