import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutedListComponent } from './executed-list.component';

describe('ExecutedListComponent', () => {
  let component: ExecutedListComponent;
  let fixture: ComponentFixture<ExecutedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
