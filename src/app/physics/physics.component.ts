import { Component, CUSTOM_ELEMENTS_SCHEMA, effect, viewChildren } from '@angular/core';
import { NgtcPhysics } from 'angular-three-cannon';
import { BoxComponent } from "./box/box.component";
import { extend, injectStore, NgtArgs } from 'angular-three';
import { Triplet } from '@pmndrs/cannon-worker-api';
import {  PlaneComponent } from './plane/plane.component';
import { OrbitControls } from 'three-stdlib';

extend({ OrbitControls });

@Component({
  selector: 'app-physics',
  imports: [PlaneComponent, BoxComponent, NgtcPhysics, NgtArgs],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './physics.component.html',
  styleUrl: './physics.component.css'
})
export class PhysicsComponent {

  protected readonly Math = Math;

  cubePositions: Triplet[] = [
    [0.1, 7, 0],
    [0, 12, -1],
    [0, 22, -2],
  ];

  cubes = viewChildren(BoxComponent);
  private store = injectStore();
  protected camera = this.store.select('camera');
  protected glDomElement = this.store.select('gl', 'domElement');

  constructor() {
    const store = injectStore();

    effect((onCleanup) => {
      const cubes = this.cubes();
      if (!cubes.length) return;

      const sub = store.snapshot.pointerMissed$.subscribe(() => {
        cubes.forEach((cube, index) => {
          cube.boxApi()?.position.set(...this.cubePositions[index]);
          cube.boxApi()?.rotation.set(0.4, 0.2, 0.5);
        });
      });
      onCleanup(() => sub.unsubscribe());
    });
  }
}
