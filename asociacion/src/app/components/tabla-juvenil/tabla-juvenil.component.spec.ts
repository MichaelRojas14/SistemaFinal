import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaJuvenilComponent } from './tabla-juvenil.component';

describe('TablaJuvenilComponent', () => {
  let component: TablaJuvenilComponent;
  let fixture: ComponentFixture<TablaJuvenilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaJuvenilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaJuvenilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
