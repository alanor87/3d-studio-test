import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { canopyStructure } from "./data.js";
import { loadModel, resizeRendererToDisplaySize } from "./utils.js";

const { degToRad } = THREE.MathUtils;

async function main() {
  const canvas: HTMLCanvasElement | null = document.querySelector(".canvas");
  if (!canvas) {
    console.log("Error retrieving canvas element");
    return;
  }

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas as any,
  });
  const scene = new THREE.Scene();

  // Camera
  const fov = 45;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 2, 10);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // Orbit controls
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 0, 0);
  controls.update();

  // Creating ground
  const loader = new THREE.TextureLoader();
  const asphaltTex = loader.load('../data/textures/roof_texture.jpg');
  const groundGeo = new THREE.PlaneGeometry(3.15, 5.15);
  const groundMat = new THREE.MeshPhongMaterial({ map : asphaltTex, side: THREE.DoubleSide  });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotateX(degToRad(90))
  scene.add(ground);

  // Grid helper
  const grid = new THREE.GridHelper(10, 10);
  scene.add(grid);
  // Axes helper
  const axes = new THREE.AxesHelper(10);
  scene.add(axes);

  const objectsCreationRequests = Object.entries(canopyStructure).map(
    ([key, value]) => loadModel(key, value as any) //!!!
  );

  // Creating and positioning all balks.
  await Promise.all(objectsCreationRequests);

  // Adding all the balks to the scene.
  Object.values(canopyStructure).forEach((value) => {
    value.instances.forEach(
      (instance) => instance.objectRef && scene.add(instance.objectRef)
    );
  });

  console.log(canopyStructure);

  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    controls.update();
    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
