import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaJuvenilAdminComponent } from './tabla-juvenil-admin.component';

describe('TablaJuvenilAdminComponent', () => {
  let component: TablaJuvenilAdminComponent;
  let fixture: ComponentFixture<TablaJuvenilAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaJuvenilAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaJuvenilAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
