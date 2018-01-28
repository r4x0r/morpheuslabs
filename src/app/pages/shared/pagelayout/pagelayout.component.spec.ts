import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlheaderComponent } from './mlheader.component';

describe('MlheaderComponent', () => {
  let component: MlheaderComponent;
  let fixture: ComponentFixture<MlheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
