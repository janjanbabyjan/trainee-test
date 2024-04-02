import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOutputComponent } from './show-output.component';

describe('ShowOutputComponent', () => {
  let component: ShowOutputComponent;
  let fixture: ComponentFixture<ShowOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowOutputComponent]
    });
    fixture = TestBed.createComponent(ShowOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
