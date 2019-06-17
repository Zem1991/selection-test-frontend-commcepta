import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMenorComponent } from './box-menor.component';

describe('BoxMenorComponent', () => {
  let component: BoxMenorComponent;
  let fixture: ComponentFixture<BoxMenorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxMenorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxMenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
