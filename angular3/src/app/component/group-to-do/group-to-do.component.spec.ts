import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupToDoComponent } from './group-to-do.component';

describe('GroupToDoComponent', () => {
  let component: GroupToDoComponent;
  let fixture: ComponentFixture<GroupToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
