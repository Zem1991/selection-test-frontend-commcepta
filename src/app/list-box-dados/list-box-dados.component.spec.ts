import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBoxDadosComponent } from './list-box-dados.component';

describe('ListBoxDadosComponent', () => {
  let component: ListBoxDadosComponent;
  let fixture: ComponentFixture<ListBoxDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBoxDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBoxDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
