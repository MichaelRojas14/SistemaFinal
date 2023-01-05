import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeralesComponent } from './perales.component';

describe('PeralesComponent', () => {
  let component: PeralesComponent;
  let fixture: ComponentFixture<PeralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
