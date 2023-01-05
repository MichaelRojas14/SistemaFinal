import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPrimeraComponent } from './ingresar-primera.component';

describe('IngresarPrimeraComponent', () => {
  let component: IngresarPrimeraComponent;
  let fixture: ComponentFixture<IngresarPrimeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarPrimeraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarPrimeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
