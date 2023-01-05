import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PataguasComponent } from './pataguas.component';

describe('PataguasComponent', () => {
  let component: PataguasComponent;
  let fixture: ComponentFixture<PataguasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PataguasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PataguasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
