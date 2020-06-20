import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedcontentComponent } from './fixedcontent.component';

describe('FixedcontentComponent', () => {
  let component: FixedcontentComponent;
  let fixture: ComponentFixture<FixedcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
