import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarVallabatidaComponent } from './ingresar-vallabatida.component';

describe('IngresarVallabatidaComponent', () => {
  let component: IngresarVallabatidaComponent;
  let fixture: ComponentFixture<IngresarVallabatidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarVallabatidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarVallabatidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
