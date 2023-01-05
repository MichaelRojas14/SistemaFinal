import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarsuspensionComponent } from './ingresarsuspension.component';

describe('IngresarsuspensionComponent', () => {
  let component: IngresarsuspensionComponent;
  let fixture: ComponentFixture<IngresarsuspensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarsuspensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarsuspensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
