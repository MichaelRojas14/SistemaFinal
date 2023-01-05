import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCincuentaAdminComponent } from './tabla-cincuenta-admin.component';

describe('TablaCincuentaAdminComponent', () => {
  let component: TablaCincuentaAdminComponent;
  let fixture: ComponentFixture<TablaCincuentaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCincuentaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaCincuentaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
