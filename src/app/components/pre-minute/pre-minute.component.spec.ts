import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreMinuteComponent } from './pre-minute.component';

describe('PreMinuteComponent', () => {
  let component: PreMinuteComponent;
  let fixture: ComponentFixture<PreMinuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreMinuteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreMinuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
