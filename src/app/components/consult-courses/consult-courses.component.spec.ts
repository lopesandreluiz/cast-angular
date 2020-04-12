import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultCoursesComponent } from './consult-courses.component';

describe('ConsultCursosComponent', () => {
  let component: ConsultCoursesComponent;
  let fixture: ComponentFixture<ConsultCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
