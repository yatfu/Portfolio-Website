import * as THREE from './three.module.js';

// VARIABLES

const canvas = document.querySelector('canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const geometry = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);

const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#background')});

// create three.js scene

renderer.setClearColor(0xffffff, 1); // set clear color background to white

document.body.appendChild(renderer.domElement);

// add objects to scene

scene.add(cube);

// camera positioning
camera.position.z = 20;

// WINDOW RESIZE FUNCTION

window.addEventListener('resize', function(event) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// UPDATE FUNCTIONS

let update = function()
{
    
};

let render = function()
{

    renderer.render(scene, camera);
};

let gameloop = function()
{
    requestAnimationFrame(gameloop);
    update();
    render();
};

gameloop();