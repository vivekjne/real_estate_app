import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondnavComponent } from './secondnav.component';

describe('SecondnavComponent', () => {
  let component: SecondnavComponent;
  let fixture: ComponentFixture<SecondnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
