import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenilaComponent } from './venila.component';

describe('VenilaComponent', () => {
  let component: VenilaComponent;
  let fixture: ComponentFixture<VenilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenilaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
