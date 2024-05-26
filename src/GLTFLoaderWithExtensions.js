import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

export function createGLTFLoader() {
  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);

  // Optional: KTX2Loader for compressed textures
  const ktx2Loader = new KTX2Loader();
  ktx2Loader.setTranscoderPath('path/to/basis/');
  loader.setKTX2Loader(ktx2Loader);

  return loader;
}
