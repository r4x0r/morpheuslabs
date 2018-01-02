import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlsidebarComponent } from './mlsidebar.component';

describe('MlsidebarComponent', () => {
  let component: MlsidebarComponent;
  let fixture: ComponentFixture<MlsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
