import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvocadoresComponent } from './invocadores.component';

describe('InvocadoresComponent', () => {
  let component: InvocadoresComponent;
  let fixture: ComponentFixture<InvocadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvocadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvocadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
