import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaElenaComponent } from './santa-elena.component';

describe('SantaElenaComponent', () => {
  let component: SantaElenaComponent;
  let fixture: ComponentFixture<SantaElenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SantaElenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SantaElenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
