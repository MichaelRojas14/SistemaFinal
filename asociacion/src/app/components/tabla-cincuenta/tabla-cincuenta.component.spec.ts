import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCincuentaComponent } from './tabla-cincuenta.component';

describe('TablaCincuentaComponent', () => {
  let component: TablaCincuentaComponent;
  let fixture: ComponentFixture<TablaCincuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCincuentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaCincuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
