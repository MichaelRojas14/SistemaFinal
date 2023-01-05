import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVallaBatidaAdminComponent } from './tabla-valla-batida-admin.component';

describe('TablaVallaBatidaAdminComponent', () => {
  let component: TablaVallaBatidaAdminComponent;
  let fixture: ComponentFixture<TablaVallaBatidaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaVallaBatidaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaVallaBatidaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
