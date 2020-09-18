import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPessoasComponent } from './grid-pessoas.component';

describe('GridPessoasComponent', () => {
  let component: GridPessoasComponent;
  let fixture: ComponentFixture<GridPessoasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPessoasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
