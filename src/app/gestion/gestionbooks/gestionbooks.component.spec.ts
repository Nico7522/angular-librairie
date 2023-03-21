import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionbooksComponent } from './gestionbooks.component';

describe('GestionbooksComponent', () => {
  let component: GestionbooksComponent;
  let fixture: ComponentFixture<GestionbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
