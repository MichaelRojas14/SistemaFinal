import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCuarentaComponent } from './tabla-cuarenta.component';

describe('TablaCuarentaComponent', () => {
  let component: TablaCuarentaComponent;
  let fixture: ComponentFixture<TablaCuarentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCuarentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaCuarentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
