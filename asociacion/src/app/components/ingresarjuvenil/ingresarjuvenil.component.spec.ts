import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarjuvenilComponent } from './ingresarjuvenil.component';

describe('IngresarjuvenilComponent', () => {
  let component: IngresarjuvenilComponent;
  let fixture: ComponentFixture<IngresarjuvenilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarjuvenilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarjuvenilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
