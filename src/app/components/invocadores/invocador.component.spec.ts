import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvocadorComponent } from './invocador.component';

describe('InvocadorComponent', () => {
  let component: InvocadorComponent;
  let fixture: ComponentFixture<InvocadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvocadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvocadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
