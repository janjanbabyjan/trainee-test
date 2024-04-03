import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecrudComponent } from './pagecrud.component';

describe('PagecrudComponent', () => {
  let component: PagecrudComponent;
  let fixture: ComponentFixture<PagecrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagecrudComponent]
    });
    fixture = TestBed.createComponent(PagecrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
