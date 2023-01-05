import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoJuvenilComponent } from './resultado-juvenil.component';

describe('ResultadoJuvenilComponent', () => {
  let component: ResultadoJuvenilComponent;
  let fixture: ComponentFixture<ResultadoJuvenilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoJuvenilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoJuvenilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
