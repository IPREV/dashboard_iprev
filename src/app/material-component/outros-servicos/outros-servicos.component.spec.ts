import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrosServicosComponent } from './outros-servicos.component';

describe('OutrosServicosComponent', () => {
  let component: OutrosServicosComponent;
  let fixture: ComponentFixture<OutrosServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutrosServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutrosServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
