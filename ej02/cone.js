var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var r=2; //Radio del cono
var h=2; //Altura del cono 

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

var geometry = new THREE.ConeGeometry(r, h, 10);
var color = [{color:0xFF9C3B}, {color:0x00A4C8}, {color:0xFF6CE4}]; //Colores utilizados en el material
var material=[new THREE.MeshStandardMaterial(color[0]),new THREE.MeshLambertMaterial(color[1]),new THREE.MeshPhongMaterial(color[2])];
var cone = new THREE.Mesh(geometry, material[0]);
scene.add(cone)
cone.position.y = 0

// Rotar el cono 90 grados en X
cone.rotation.x += Math.PI/2;
//Trasladar el cono en Y
cone.translateY(h/2);
//Escalamos el cono en Y
cone.scale.set(r,3*h,r);
//Rotamos el cono en x 
cone.rotation.x += Math.PI / 10.2;
//Trasladamos el cono en la misma posicion que la imagen indicada
cone.translateY(h*1.05);
cone.translateZ(-r*0.8);

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