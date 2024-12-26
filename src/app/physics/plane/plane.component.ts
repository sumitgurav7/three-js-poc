import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';
import { NgtArgs } from 'angular-three';
import { injectPlane } from 'angular-three-cannon/body';
import { Mesh, PlaneGeometry } from 'three';

@Component({
  selector: 'app-plane',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './plane.component.html',
  styleUrl: './plane.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgtArgs],
  standalone: true,
})
export class PlaneComponent {
  meshRef = viewChild.required<ElementRef<Mesh>>('meshPlane');
  constructor() {
    injectPlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0], receiveShadow:true, castShadow:true }), this.meshRef);
  }
}

