import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayouComponent } from './layou.component';

describe('LayouComponent', () => {
  let component: LayouComponent;
  let fixture: ComponentFixture<LayouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
