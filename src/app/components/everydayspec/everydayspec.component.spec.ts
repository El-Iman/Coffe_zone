import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EverydayspecComponent } from './everydayspec.component';

describe('EverydayspecComponent', () => {
  let component: EverydayspecComponent;
  let fixture: ComponentFixture<EverydayspecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EverydayspecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EverydayspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
