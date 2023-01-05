import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarclubComponent } from './ingresarclub.component';

describe('IngresarclubComponent', () => {
  let component: IngresarclubComponent;
  let fixture: ComponentFixture<IngresarclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarclubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
