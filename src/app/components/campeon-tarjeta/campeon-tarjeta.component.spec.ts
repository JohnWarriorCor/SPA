import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonTarjetaComponent } from './campeon-tarjeta.component';

describe('CampeonTarjetaComponent', () => {
  let component: CampeonTarjetaComponent;
  let fixture: ComponentFixture<CampeonTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampeonTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeonTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
