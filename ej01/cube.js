var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

//var geometry = new THREE.BoxGeometry(5, 5, 5);
var color = [{color:0xFF9C3B}, {color:0x00A4C8}, {color:0xFF6CE4}]; //Colores utilizados en el material
var material=[new THREE.MeshStandardMaterial(color[0]),new THREE.MeshLambertMaterial(color[1]),new THREE.MeshPhongMaterial(color[2])];
//var cone = new THREE.Mesh(geometry, material);
//scene.add(cone)
//cone.position.y = 1.5

var lado = 5;
var py = lado/2;
var px = lado/2;
var pz = lado/2;

var geometry = new THREE.BoxGeometry(lado,lado,lado);
var grande = new THREE.Mesh(geometry, material[0]);
scene.add(grande)

grande.translateX(px);
grande.translateY(py);
grande.translateZ(pz);

var geometry2 = new THREE.BoxGeometry(lado/2,lado/2,lado/2);
var mediano = new THREE.Mesh(geometry2, material[1]);
scene.add(mediano)
mediano.translateY(lado - (lado/4));

mediano.translateX(px);
mediano.translateY(py);
mediano.translateZ(pz);

var geometry3 = new THREE.BoxGeometry(lado/4,lado/4,lado/4);
var pequeño = new THREE.Mesh(geometry3, material[2]);
scene.add(pequeño)
pequeño.translateY(lado + (lado/8));

pequeño.translateX(px);
pequeño.translateY(py);
pequeño.translateZ(pz);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();