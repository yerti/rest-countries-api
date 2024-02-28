import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDetailCountryComponent } from './all-detail-country.component';

describe('AllDetailCountryComponent', () => {
  let component: AllDetailCountryComponent;
  let fixture: ComponentFixture<AllDetailCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllDetailCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllDetailCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
