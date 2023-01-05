import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarcalendarioComponent } from './ingresarcalendario.component';

describe('IngresarcalendarioComponent', () => {
  let component: IngresarcalendarioComponent;
  let fixture: ComponentFixture<IngresarcalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarcalendarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarcalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
