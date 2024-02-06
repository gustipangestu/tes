import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.background = new THREE.Color('skyblue'); 

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// three THREE.Sprite
// const material = new THREE.SpriteMaterial({ size: 5,
//       color: 0xffffff })
//     const sprite = new THREE.Sprite(material)
//     sprite.position.copy(new THREE.Vector3(1,1,1))
//     scene.add(sprite);

// three Points
// const vertices = [];

// for (let i = 0; i < 10000; i++) {
//     const x = THREE.MathUtils.randFloatSpread(200);
//     const y = THREE.MathUtils.randFloatSpread(200);
//     const z = THREE.MathUtils.randFloatSpread(2000);

//     vertices.push(x, y, z);
// }

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
// const material = new THREE.PointsMaterial({ color: 0x888888 });
// const points = new THREE.Points(geometry, material);
// scene.add(points);


// const createGhostTexture = () => {
//     const canvas = document.createElement('canvas');
//     canvas.width = 70;
//     canvas.height = 70;
//     const ctx = canvas.getContext('2d');
//     // the body
//     ctx.translate(-81, -84);
//     ctx.fillStyle = 'orange';
//     ctx.beginPath();
//     ctx.moveTo(83, 116);
//     ctx.lineTo(83, 90);
//     ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
//     // some code removed for clarity
//     ctx.fill();
//     // the eyes
//     ctx.fillStyle = 'white';
//     ctx.beginPath();
//     ctx.moveTo(91, 96);
//     ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
//     ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
//     // some code removed for clarity
//     ctx.fill();
//     // the pupils
//     ctx.fillStyle = 'blue';
//     ctx.beginPath();
//     ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
//     ctx.fill();
//     ctx.beginPath();
//     ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
//     ctx.fill();
//     const texture = new THREE.Texture(canvas);
//     texture.needsUpdate = true;
//     return texture;
// }

// const createPoints = () => {
//     const points = [];
//     const range = 15;
//     for (let i = 0; i < 1500000; i++) {
//         let particle = new THREE.Vector3(
//             Math.random() * range - range / 2,
//             Math.random() * range - range / 2,
//             Math.random() * range - range / 2
//         )
//         points.push(particle);
//     }
//     const colors = new Float32Array(points.length * 3);
//     points.forEach((e, i) => {
//         const c = new THREE.Color(Math.random() * 0xff00ff);
//         colors[i * 3] = c.r;
//         colors[i * 3 + 1] = c.g;
//         colors[i * 3 + 2] = c.b;
//     })
//     const geom = new THREE.BufferGeometry().setFromPoints(points);
//     geom.setAttribute('color', new THREE.BufferAttribute(colors, 3, true));
//     return geom;
// }
// const material = new THREE.PointsMaterial({
//     size: 0.1,
//     vertexColors: true, color: 0xffffff, map:
//         createGhostTexture()
// });
// const points = new THREE.Points(createPoints(), material);
// scene.add(points);


// add texture
const geometry = new THREE.BoxGeometry(10, 10, 1);
const texture = new THREE.TextureLoader().load("raindrop.png");
// texture.wrapS = THREE.RepeatWrapping;
// texture.wrapT = THREE.RepeatWrapping;
// texture.repeat.set( 4, 4 );
const material = new THREE.MeshStandardMaterial( { map: texture, transparent:true } );
const sprite = new THREE.Mesh(geometry, material)
scene.add( sprite );
// const material = new THREE.PointsMaterial({
//     size: 0.5,
//     vertexColors: false,
//     color: 0xffffff,`
//     map: texture,
//     transparent: true,
//     opacity: 0.8,
//     alphaTest: 0.01
// });

camera.position.z = 5;
function animate() {
    requestAnimationFrame(animate);



    renderer.render(scene, camera);
}

animate();