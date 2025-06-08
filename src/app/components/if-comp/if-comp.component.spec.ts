import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfCompComponent } from './if-comp.component';

describe('IfCompComponent', () => {
  let component: IfCompComponent;
  let fixture: ComponentFixture<IfCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
