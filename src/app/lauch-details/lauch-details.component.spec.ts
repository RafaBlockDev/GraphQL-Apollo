import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LauchDetailsComponent } from './lauch-details.component';

describe('LauchDetailsComponent', () => {
  let component: LauchDetailsComponent;
  let fixture: ComponentFixture<LauchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LauchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LauchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
