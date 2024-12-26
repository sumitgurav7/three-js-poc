import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { injectBeforeRender, injectStore } from 'angular-three';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

@Component({
  selector: 'app-venila',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './venila.component.html',
  styleUrl: './venila.component.css',
})
export class VenilaComponent {
  private store = injectStore();
  protected camera = this.store.select('camera');
  protected glDomElement = this.store.select('gl', 'domElement');
  protected scene = this.store.select('scene');

  constructor() {
    this.initCamera();
    this.initScene();
  }

  initScene() {
    // Initialize the scene here
    this.scene().background = new THREE.Color(0x000000);
    this.scene().add(new THREE.AmbientLight(0x404040));
    this.scene().add(new THREE.GridHelper(10, 10));
    this.scene().add(new THREE.AxesHelper(5));
    const spotLight = this.getSpotLight();
    this.scene().add(spotLight);
    const pointLight = this.getpointLight();
    this.scene().add(pointLight);
    const cube = this.getBox();
    cube.position.set(5, 0, 0);
    this.scene().add(cube);
    this.addRotation(cube);

    const cube2 = this.getBox();
    cube2.position.set(-5, 0, 0);
    this.scene().add(cube2);
    this.addRotation(cube2);


    const cube3 = this.getBox();
    cube3.position.set(0, 0, 0);
    this.scene().add(cube3);
    this.addRotation(cube3);

    new OrbitControls(this.camera(), this.glDomElement());
    // Add objects to the scene
  }

  private getpointLight() {
    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(-10, -10, -10);
    pointLight.intensity = 0.5 * Math.PI;
    pointLight.decay = 0;
    return pointLight;
  }

  private getSpotLight() {
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(10, 10, 10);
    spotLight.castShadow = true;
    spotLight.angle = 0.15;
    spotLight.penumbra = 1;
    spotLight.decay = 0;
    spotLight.intensity = 0.5 * Math.PI;
    return spotLight;
  }

  getBox() {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    return new THREE.Mesh(geometry, material);
  }

  addRotation(mesh: THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial, THREE.Object3DEventMap>) {
    injectBeforeRender(() => {
      mesh.rotation.x += 0.001;
      mesh.rotation.y += 0.001;
    });
  }


  initCamera() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowUp':
          this.camera().position.y += 0.1;
          break;
        case 'ArrowDown':
          this.camera().position.y -= 0.1;
          break;
        case 'ArrowLeft':
          this.camera().position.x -= 0.1;
          break;
        case 'ArrowRight':
          this.camera().position.x += 0.1;
          break;
        default:
          break;
      }
    });
    this.camera().position.z = 5;
  }
}
