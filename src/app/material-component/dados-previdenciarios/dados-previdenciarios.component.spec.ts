import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPrevidenciariosComponent } from './dados-previdenciarios.component';

describe('DadosPrevidenciariosComponent', () => {
  let component: DadosPrevidenciariosComponent;
  let fixture: ComponentFixture<DadosPrevidenciariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosPrevidenciariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosPrevidenciariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
