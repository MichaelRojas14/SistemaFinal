import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarResCincuentaComponent } from './ingresar-res-cincuenta.component';

describe('IngresarResCincuentaComponent', () => {
  let component: IngresarResCincuentaComponent;
  let fixture: ComponentFixture<IngresarResCincuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarResCincuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarResCincuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
