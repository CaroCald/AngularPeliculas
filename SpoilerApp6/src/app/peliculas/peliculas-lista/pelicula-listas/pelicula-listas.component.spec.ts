import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaListasComponent } from './pelicula-listas.component';

describe('PeliculaListasComponent', () => {
  let component: PeliculaListasComponent;
  let fixture: ComponentFixture<PeliculaListasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaListasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
