import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPosicionesAdminComponent } from './tabla-posiciones-admin.component';

describe('TablaPosicionesAdminComponent', () => {
  let component: TablaPosicionesAdminComponent;
  let fixture: ComponentFixture<TablaPosicionesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPosicionesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPosicionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
