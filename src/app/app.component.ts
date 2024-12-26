import { Component } from '@angular/core';
import { extend, NgtCanvas } from 'angular-three';
import * as THREE from 'three';
import { SceneGraphComponent } from './scene-graph/scene-graph.component';
import { VenilaComponent } from './venila/venila.component';

extend(THREE);

@Component({
  selector: 'app-root',
  imports: [NgtCanvas],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'three-js-poc';
  protected sceneGraph = VenilaComponent;
}
