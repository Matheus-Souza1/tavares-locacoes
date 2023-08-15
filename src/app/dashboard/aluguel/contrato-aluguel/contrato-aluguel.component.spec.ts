import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoAluguelComponent } from './contrato-aluguel.component';

describe('ContratoAluguelComponent', () => {
  let component: ContratoAluguelComponent;
  let fixture: ComponentFixture<ContratoAluguelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoAluguelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratoAluguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
