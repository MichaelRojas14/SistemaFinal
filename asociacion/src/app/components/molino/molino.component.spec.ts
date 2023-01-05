import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolinoComponent } from './molino.component';

describe('MolinoComponent', () => {
  let component: MolinoComponent;
  let fixture: ComponentFixture<MolinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
