import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherMgComponent } from './teacher-mg.component';

describe('TeacherMgComponent', () => {
  let component: TeacherMgComponent;
  let fixture: ComponentFixture<TeacherMgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherMgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherMgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
