import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarposicionComponent } from './ingresarposicion.component';

describe('IngresarposicionComponent', () => {
  let component: IngresarposicionComponent;
  let fixture: ComponentFixture<IngresarposicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarposicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarposicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
