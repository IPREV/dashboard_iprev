import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhaMarketingComponent } from './senha-marketing.component';

describe('SenhaMarketingComponent', () => {
  let component: SenhaMarketingComponent;
  let fixture: ComponentFixture<SenhaMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenhaMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenhaMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
