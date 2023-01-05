import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhigginsComponent } from './ohiggins.component';

describe('OhigginsComponent', () => {
  let component: OhigginsComponent;
  let fixture: ComponentFixture<OhigginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhigginsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OhigginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
