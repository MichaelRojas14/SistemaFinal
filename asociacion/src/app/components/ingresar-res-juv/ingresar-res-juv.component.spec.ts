import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarResJuvComponent } from './ingresar-res-juv.component';

describe('IngresarResJuvComponent', () => {
  let component: IngresarResJuvComponent;
  let fixture: ComponentFixture<IngresarResJuvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarResJuvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarResJuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
