import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresargoleadorComponent } from './ingresargoleador.component';

describe('IngresargoleadorComponent', () => {
  let component: IngresargoleadorComponent;
  let fixture: ComponentFixture<IngresargoleadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresargoleadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresargoleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
