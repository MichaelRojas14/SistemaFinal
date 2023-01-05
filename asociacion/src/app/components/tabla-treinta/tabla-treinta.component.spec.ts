import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTreintaComponent } from './tabla-treinta.component';

describe('TablaTreintaComponent', () => {
  let component: TablaTreintaComponent;
  let fixture: ComponentFixture<TablaTreintaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaTreintaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaTreintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
