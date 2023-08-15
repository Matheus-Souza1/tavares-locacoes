import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFerramentaComponent } from './criar-ferramenta.component';

describe('CriarFerramentaComponent', () => {
  let component: CriarFerramentaComponent;
  let fixture: ComponentFixture<CriarFerramentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarFerramentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarFerramentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
