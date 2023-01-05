import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarcincuentaComponent } from './ingresarcincuenta.component';

describe('IngresarcincuentaComponent', () => {
  let component: IngresarcincuentaComponent;
  let fixture: ComponentFixture<IngresarcincuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarcincuentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarcincuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
