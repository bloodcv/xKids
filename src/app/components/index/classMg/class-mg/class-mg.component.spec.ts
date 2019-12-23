import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassMgComponent } from './class-mg.component';

describe('ClassMgComponent', () => {
  let component: ClassMgComponent;
  let fixture: ComponentFixture<ClassMgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassMgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassMgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
