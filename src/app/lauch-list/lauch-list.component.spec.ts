import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LauchListComponent } from './lauch-list.component';

describe('LauchListComponent', () => {
  let component: LauchListComponent;
  let fixture: ComponentFixture<LauchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LauchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LauchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
