import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSuspensionesComponent } from './tabla-suspensiones.component';

describe('TablaSuspensionesComponent', () => {
  let component: TablaSuspensionesComponent;
  let fixture: ComponentFixture<TablaSuspensionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaSuspensionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaSuspensionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
