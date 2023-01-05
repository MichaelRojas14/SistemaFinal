import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPoscuarentaComponent } from './ingresar-poscuarenta.component';

describe('IngresarPoscuarentaComponent', () => {
  let component: IngresarPoscuarentaComponent;
  let fixture: ComponentFixture<IngresarPoscuarentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarPoscuarentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarPoscuarentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
