import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarjugadorComponent } from './ingresarjugador.component';

describe('IngresarjugadorComponent', () => {
  let component: IngresarjugadorComponent;
  let fixture: ComponentFixture<IngresarjugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarjugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarjugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
