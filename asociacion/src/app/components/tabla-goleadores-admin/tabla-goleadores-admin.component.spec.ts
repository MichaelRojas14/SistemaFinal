import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaGoleadoresAdminComponent } from './tabla-goleadores-admin.component';

describe('TablaGoleadoresAdminComponent', () => {
  let component: TablaGoleadoresAdminComponent;
  let fixture: ComponentFixture<TablaGoleadoresAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaGoleadoresAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaGoleadoresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
