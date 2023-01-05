import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPostreintaComponent } from './ingresar-postreinta.component';

describe('IngresarPostreintaComponent', () => {
  let component: IngresarPostreintaComponent;
  let fixture: ComponentFixture<IngresarPostreintaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarPostreintaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarPostreintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
