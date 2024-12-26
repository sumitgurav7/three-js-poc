import { Component } from '@angular/core';
import { extend, NgtCanvas } from 'angular-three';
import * as THREE from 'three';
import { SceneGraphComponent } from './scene-graph/scene-graph.component';
import { VenilaComponent } from './venila/venila.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  PhysicsComponent } from './physics/physics.component';

extend(THREE);

@Component({
  selector: 'app-root',
  imports: [NgtCanvas, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'three-js-poc';
  sceneGraphValue = "";
  protected sceneGraph: any= SceneGraphComponent;
  protected vanilaGraph: any= VenilaComponent;
  protected physicsGraph: any= PhysicsComponent;
  sceneGraphChange(event: any) {
    this.sceneGraphValue = event;
    console.log(this.sceneGraphValue);
  }
}
