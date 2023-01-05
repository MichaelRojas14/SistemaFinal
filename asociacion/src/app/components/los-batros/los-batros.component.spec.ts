import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LosBatrosComponent } from './los-batros.component';

describe('LosBatrosComponent', () => {
  let component: LosBatrosComponent;
  let fixture: ComponentFixture<LosBatrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LosBatrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LosBatrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
