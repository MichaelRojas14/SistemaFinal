import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenascoComponent } from './penasco.component';

describe('PenascoComponent', () => {
  let component: PenascoComponent;
  let fixture: ComponentFixture<PenascoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenascoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenascoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
