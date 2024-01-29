import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const material = new THREE.SpriteMaterial({ size: 5,
      color: 0xffffff })
    const sprite = new THREE.Sprite(material)
    sprite.position.copy(new THREE.Vector3(1,1,1))

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	

	renderer.render( scene, camera );
}

animate();