
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
  