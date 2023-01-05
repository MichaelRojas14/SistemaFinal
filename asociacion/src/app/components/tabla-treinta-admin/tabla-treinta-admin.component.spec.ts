import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTreintaAdminComponent } from './tabla-treinta-admin.component';

describe('TablaTreintaAdminComponent', () => {
  let component: TablaTreintaAdminComponent;
  let fixture: ComponentFixture<TablaTreintaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaTreintaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaTreintaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
