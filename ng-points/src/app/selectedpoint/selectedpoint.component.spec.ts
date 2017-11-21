import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedpointComponent } from './selectedpoint.component';

describe('SelectedpointComponent', () => {
  let component: SelectedpointComponent;
  let fixture: ComponentFixture<SelectedpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
