import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetweetComponent } from './updatetweet.component';

describe('UpdatetweetComponent', () => {
  let component: UpdatetweetComponent;
  let fixture: ComponentFixture<UpdatetweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
