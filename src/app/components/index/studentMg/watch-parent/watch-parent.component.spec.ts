import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchParentComponent } from './watch-parent.component';

describe('WatchParentComponent', () => {
  let component: WatchParentComponent;
  let fixture: ComponentFixture<WatchParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
