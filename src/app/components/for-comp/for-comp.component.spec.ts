import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForCompComponent } from './for-comp.component';

describe('ForCompComponent', () => {
  let component: ForCompComponent;
  let fixture: ComponentFixture<ForCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
