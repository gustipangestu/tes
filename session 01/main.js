import * as THREE from "three";


const scene = new THREE.Scene();
scene.background = new THREE.Color("skyblue");
// scene.fog = new THREE.Fog(0x000000, 0.0025, 50);

const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
  );
  camera.position.x = -1;
  camera.position.z = 13;
  camera.position.y = 3;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// ambient Light==========================
// const color = new THREE.Color("rgb(255,255,255)");
// const light = new THREE.AmbientLight(0x9999ff);
// scene.add(light);
// ========================================

// THREE.SpotLight========================
// const spotLight = new THREE.SpotLight("#ffffff")
// spotLight.penumbra = 0.4;
// spotLight.position.set(0, 1, 5);
// spotLight.castShadow = true;
// spotLight.intensity = 10;
// spotLight.shadow.camera.near = 10;
// spotLight.shadow.camera.far = 25;
// spotLight.shadow.mapSize.width = 2048;
// spotLight.shadow.mapSize.height = 2048;
// spotLight.shadow.bias = -0.01;
// scene.add(spotLight);
// ==========================================






const geometry = new THREE.BoxGeometry( 4, 4, 7 );
const material = new THREE.MeshLambertMaterial();
const cube = new THREE.Mesh( geometry, material );
cube.position.x = 0;
cube.position.y=0;
cube.position.z=1;
scene.add( cube );





function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
