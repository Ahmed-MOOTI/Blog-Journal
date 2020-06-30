import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddarticlesComponent } from './addarticles.component';

describe('AddarticlesComponent', () => {
  let component: AddarticlesComponent;
  let fixture: ComponentFixture<AddarticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddarticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
