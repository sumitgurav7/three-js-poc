import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  input,
  viewChild,
} from '@angular/core';
import { Triplet } from '@pmndrs/cannon-worker-api';
import { NgtVector3 } from 'angular-three';
import { injectBox } from 'angular-three-cannon/body';
import { Mesh } from 'three';

@Component({
  selector: 'app-box',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BoxComponent {
  position = input<NgtVector3>([0, 5, 0]);

  meshRef = viewChild.required<ElementRef<Mesh>>('meshBox');

  boxApi = injectBox(
    () => ({ mass: 1, position: this.position() as Triplet, rotation: [0.4, 0.2, 0.5], args: [1, 1, 1] }),
    this.meshRef,
  );

}



