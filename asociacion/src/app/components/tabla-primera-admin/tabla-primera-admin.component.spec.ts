import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPrimeraAdminComponent } from './tabla-primera-admin.component';

describe('TablaPrimeraAdminComponent', () => {
  let component: TablaPrimeraAdminComponent;
  let fixture: ComponentFixture<TablaPrimeraAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPrimeraAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPrimeraAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
