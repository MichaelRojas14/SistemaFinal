import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPrimeraComponent } from './tabla-primera.component';

describe('TablaPrimeraComponent', () => {
  let component: TablaPrimeraComponent;
  let fixture: ComponentFixture<TablaPrimeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPrimeraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPrimeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
