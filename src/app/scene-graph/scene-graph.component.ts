import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';
import { injectStore, extend, NgtArgs } from 'angular-three';
import { OrbitControls } from 'three-stdlib';
import { CubeComponent } from "../cube/cube.component";

extend({ OrbitControls });

@Component({
  selector: 'app-scene-graph',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CubeComponent, NgtArgs],
  templateUrl: './scene-graph.component.html',
  styleUrl: './scene-graph.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SceneGraphComponent {
  protected readonly Math = Math;

  private store = injectStore();
  protected camera = this.store.select('camera');
  protected glDomElement = this.store.select('gl', 'domElement');
  constructor() {
  }

}
