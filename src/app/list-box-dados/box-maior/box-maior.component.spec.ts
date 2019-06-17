import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMaiorComponent } from './box-maior.component';

describe('BoxMaiorComponent', () => {
  let component: BoxMaiorComponent;
  let fixture: ComponentFixture<BoxMaiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxMaiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxMaiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
