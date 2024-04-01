import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllConbinationsComponent } from './all-conbinations.component';

describe('AllConbinationsComponent', () => {
  let component: AllConbinationsComponent;
  let fixture: ComponentFixture<AllConbinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllConbinationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllConbinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
