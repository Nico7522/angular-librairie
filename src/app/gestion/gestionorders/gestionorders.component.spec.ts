import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionordersComponent } from './gestionorders.component';

describe('GestionordersComponent', () => {
  let component: GestionordersComponent;
  let fixture: ComponentFixture<GestionordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
