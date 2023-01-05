import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaitencilloComponent } from './maitencillo.component';

describe('MaitencilloComponent', () => {
  let component: MaitencilloComponent;
  let fixture: ComponentFixture<MaitencilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaitencilloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaitencilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
