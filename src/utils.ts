import * as THREE from "three";
import { TextureLoader } from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/Addons.js";

import { BalkInstanceType } from "./types.js";

const { degToRad } = THREE.MathUtils;

function resizeRendererToDisplaySize(renderer: THREE.Renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

async function loadModel(
  key: string,
  {
    instances,
    objPath,
    mtlPath,
    texPath,
  }: {
    instances: BalkInstanceType[];
    objPath: string;
    mtlPath: string;
    texPath: string;
  }
) {
  const mtlLoader = new MTLLoader();
  const objLoader = new OBJLoader();
  const textureLoader = new TextureLoader();

  const materials = await mtlLoader.loadAsync(mtlPath);
  const object = await objLoader.loadAsync(objPath);
  const texture = textureLoader.load(texPath);
  materials.preload();
  objLoader.setMaterials(materials);

  switch (key) {
    case "roof": {
      const rotation = [0, -90, 0];
      const scale = [1, 1, 3.526];
      for (let i = 0; i <29; i += 1) {
        instances.push({
          coords: [-1.755, 2.5, 2.66 - 0.19 * i],
          rotation,
          scale,
        });
      }
      break;
    }
    case "lodge_short": {
      const scale = [3.49, 1, 1];
      for (let i = 0; i <11; i += 1) {
        instances.push({
          coords: [-1.735, 2.35, 2.5 - 0.502 * i],
          scale,
        });
      }
      break;
    }
    case "lodge_inset": { 
      // front and back ones
      for (let i = 0; i <4; i += 1) {
        instances.push({
          coords: [-0.9 + 0.6 * i, 2.35, 2.55],
          rotation : [0, -90, 0]
        });
        instances.push({
          coords: [-0.9 + 0.6 * i, 2.35, -2.515],
          rotation : [0, 90, 0]
        });
      }
      break;
    }
    default: {
      break;
    }
  }
  instances.forEach((instance) => {
    const { coords, rotation, scale } = instance;
    const objectInstance = object.clone();
    objectInstance.position.set(coords[0], coords[1], coords[2]);

    if (rotation) {
      objectInstance.rotation.set(
        degToRad(rotation[0]),
        degToRad(rotation[1]),
        degToRad(rotation[2])
      );
    }

    if (scale) {
      objectInstance.scale.set(scale[0], scale[1], scale[2]);
    }

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);

    // Apply texture to all children assuming they are meshes
    objectInstance.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as any).material.map = texture; //!!!
        (child as any).material.needsUpdate = true; //!!! Important to update the material
      }
    });

    instance.objectRef = objectInstance;
  });
}

export { resizeRendererToDisplaySize, loadModel };
