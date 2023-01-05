import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCuarentaAdminComponent } from './tabla-cuarenta-admin.component';

describe('TablaCuarentaAdminComponent', () => {
  let component: TablaCuarentaAdminComponent;
  let fixture: ComponentFixture<TablaCuarentaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCuarentaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaCuarentaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
