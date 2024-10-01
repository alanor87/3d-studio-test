import * as THREE from "three";

export type CanopyStructureType = {
  [key: string]: BalkModelType;
};

export type BalkModelType = {
  mtlPath: string;
  objPath: string;
  texPath: string;
  instances: BalkInstanceType[];
};

export type BalkInstanceType = {
  type?: string; ///!!!
  coords: number[];
  rotation?: number[];
  scale?: number[];
  objectRef?: THREE.Object3D;
};

const canopyStructure: CanopyStructureType = {
  pillars: {
    mtlPath: "../data/models/balk_150x150x2200.mtl",
    objPath: "../data/models/balk_150x150x2200.obj",
    texPath: "../data/textures/texture_wood.jpg",
    instances: [
      {
        coords: [-1.5, 0, 2.5],
        type: "corner.front.left",
      },
      {
        coords: [-1.5, 0, 0],
        type: "middle",
      },
      {
        coords: [-1.5, 0, -2.5],
        type: "corner.back.left",
      },
      {
        coords: [1.5, 0, -2.5],
        type: "corner.back.right",
      },
      {
        coords: [1.5, 0, 0],
        type: "middle",
      },
      {
        coords: [1.5, 0, 2.5],
        type: "corner.front.left",
      },
    ],
  },
  cornerBeams: {
    mtlPath: "../data/models/balk_corner.mtl",
    objPath: "../data/models/balk_corner.obj",
    texPath: "../data/textures/texture_wood.jpg",
    instances: [
      {
        coords: [-1.425, 0, 2.5], // front left
      },
      {
        coords: [-1.5, 0, 2.425], // front left
        rotation: [0, 90, 0],
      },
      {
        coords: [-1.5, 0, -0.075], // middle left
        rotation: [0, 90, 0],
      },
      {
        coords: [-1.5, 0, 0.075], // middle left
        rotation: [0, -90, 0],
      },
      {
        coords: [-1.5, 0, -2.425], // back left
        rotation: [0, -90, 0],
      },
      {
        coords: [-1.425, 0, -2.5], // back left
        rotation: [0, 0, 0],
      },
      {
        coords: [1.425, 0, -2.5], //back right
        rotation: [0, -180, 0],
      },
      {
        coords: [1.5, 0, -2.425], //back right
        rotation: [0, -90, 0],
      },
      {
        coords: [1.5, 0, -0.075], // right middle
        rotation: [0, 90, 0],
      },
      {
        coords: [1.5, 0, 0.075], // right middle
        rotation: [0, -90, 0],
      },
      {
        coords: [1.5, 0, 2.425], // right front
        rotation: [0, 90, 0],
      },
      {
        coords: [1.425, 0, 2.5], // right front
        rotation: [0, 180, 0],
      },
    ],
  },
  horizontalPillars: {
    mtlPath: "../data/models/balk_150x150x1000.mtl",
    objPath: "../data/models/balk_150x150x1000.obj",
    texPath: "../data/textures/texture_wood.jpg",
    instances: [
      {
        coords: [-1.575, 2.2, 2.5], //front
        scale: [3.15, 1, 1],
        type: "front",
      },
      {
        coords: [-1.575, 2.2, -2.5], //back
        scale: [3.15, 1, 1],
        type: "back",
      },
      {
        coords: [-1.5, 2.2, 2.425], //left
        rotation: [0, 90, 0],
        scale: [4.85, 1, 1],
        type: "left",
      },
      {
        coords: [1.5, 2.2, 2.425], //right
        rotation: [0, 90, 0],
        scale: [4.85, 1, 1],
        type: "right",
      },
    ],
  },
  innerFrize: {
    mtlPath: "../data/models/Lodge_20x200x1000.mtl",
    objPath: "../data/models/Lodge_20x200x1000.obj",
    texPath: "../data/textures/texture_wood.jpg",
    instances: [
      {
        coords: [-1.68, 2.3, 2.66], //front
        scale: [3.36, 1, 1],
        type: "front",
      },
      {
        coords: [-1.68, 2.3, 2.66], //left
        scale: [5.32, 1, 1],
        rotation: [0, 90, 0],
        type: "left",
      },
      {
        coords: [-1.68, 2.3, -2.68], //back
        scale: [3.36, 1, 1],
        type: "back",
      },
      {
        coords: [1.66, 2.3, 2.68], //right
        scale: [5.34, 1, 1],
        rotation: [0, 90, 0],
        type: "right",
      },
    ],
  },
  outerFrize: {
    mtlPath: "../data/models/Lodge_20x200x1000.mtl",
    objPath: "../data/models/Lodge_20x200x1000.obj",
    texPath: "../data/textures/texture_wood.jpg",
    instances: [
      {
        coords: [-1.7, 2.4, 2.68], //front
        scale: [3.4, 1, 1],
        rotation: [0, 0, 0],
        type: "front",
      },
      {
        coords: [-1.7, 2.4, 2.68], //left
        scale: [5.36, 1, 1],
        rotation: [0, 90, 0],
        type: "left",
      },
      {
        coords: [-1.7, 2.4, -2.7], //back
        scale: [3.4, 1, 1],
        rotation: [0, 0, 0],
        type: "back",
      },
      {
        coords: [1.68, 2.4, 2.68], //right
        scale: [5.36, 1, 1],
        rotation: [0, 90, 0],
        type: "right",
      },
    ],
  },
  // roof: {
  //   mtlPath: "../data/models/Lodge_20x190x1000_bevel.mtl",
  //   objPath: "../data/models/Lodge_20x190x1000_bevel.obj",
  //   texPath: "../data/textures/texture_wood.jpg",
  //   instances: [], //generated on model loading.
  // },
  lodge_short: {
    mtlPath: "../data/models/lodge_150x50x1000.mtl",
    objPath: "../data/models/lodge_150x50x1000.obj",
    texPath: "../data/textures/texture_wood.jpg",
    instances: [], //generated on model loading.
  },
  lodge_long: {
    mtlPath: "../data/models/lodge_150x50x1000.mtl",
    objPath: "../data/models/lodge_150x50x1000.obj",
    texPath: "../data/textures/texture_wood.jpg",
    instances: [
      {
        coords: [-1.6, 2.35, 2.66], // left
        scale: [5.32, 1, 1],
        rotation: [0, 90, 0],
      },
      {
        coords: [1.55, 2.35, 2.66], // right
        scale: [5.32, 1, 1],
        rotation: [0, 90, 0],
      },
    ],
  },
  lodge_inset: {
    mtlPath: "../data/models/lodge_150x50x200.mtl",
    objPath: "../data/models/lodge_150x50x200.obj",
    texPath: "../data/textures/texture_wood.jpg",
    instances: [],
  },
};

export { canopyStructure };
