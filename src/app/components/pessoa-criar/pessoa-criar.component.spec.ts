import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaCriarComponent } from './pessoa-criar.component';

describe('PessoaCriarEditarComponent', () => {
  let component: PessoaCriarComponent;
  let fixture: ComponentFixture<PessoaCriarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaCriarComponent]
    });
    fixture = TestBed.createComponent(PessoaCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
