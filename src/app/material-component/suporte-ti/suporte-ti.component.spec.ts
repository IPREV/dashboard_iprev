import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuporteTiComponent } from './suporte-ti.component';

describe('SuporteTiComponent', () => {
  let component: SuporteTiComponent;
  let fixture: ComponentFixture<SuporteTiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuporteTiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuporteTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
