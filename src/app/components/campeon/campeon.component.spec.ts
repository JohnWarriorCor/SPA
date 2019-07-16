import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonComponent } from './campeon.component';

describe('CampeonComponent', () => {
  let component: CampeonComponent;
  let fixture: ComponentFixture<CampeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
