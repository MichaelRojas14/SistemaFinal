import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanVictorComponent } from './san-victor.component';

describe('SanVictorComponent', () => {
  let component: SanVictorComponent;
  let fixture: ComponentFixture<SanVictorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanVictorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanVictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
