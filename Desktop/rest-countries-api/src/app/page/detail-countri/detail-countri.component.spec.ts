import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCountriComponent } from './detail-countri.component';

describe('DetailCountriComponent', () => {
  let component: DetailCountriComponent;
  let fixture: ComponentFixture<DetailCountriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailCountriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailCountriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
