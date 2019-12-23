import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMgComponent } from './student-mg.component';

describe('StudentMgComponent', () => {
  let component: StudentMgComponent;
  let fixture: ComponentFixture<StudentMgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentMgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
