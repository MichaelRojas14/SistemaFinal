import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVallaBatidaComponent } from './tabla-valla-batida.component';

describe('TablaVallaBatidaComponent', () => {
  let component: TablaVallaBatidaComponent;
  let fixture: ComponentFixture<TablaVallaBatidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaVallaBatidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaVallaBatidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
