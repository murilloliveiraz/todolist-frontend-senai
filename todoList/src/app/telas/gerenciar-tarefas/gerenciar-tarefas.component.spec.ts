import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarTarefasComponent } from './gerenciar-tarefas.component';

describe('GerenciarTarefasComponent', () => {
  let component: GerenciarTarefasComponent;
  let fixture: ComponentFixture<GerenciarTarefasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciarTarefasComponent]
    });
    fixture = TestBed.createComponent(GerenciarTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
