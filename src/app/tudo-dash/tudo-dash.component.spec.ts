import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TudoDashComponent } from './tudo-dash.component';

describe('TudoDashComponent', () => {
  let component: TudoDashComponent;
  let fixture: ComponentFixture<TudoDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TudoDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TudoDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
