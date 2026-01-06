import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TudoFormComponent } from './tudo-form.component';

describe('TudoFormComponent', () => {
  let component: TudoFormComponent;
  let fixture: ComponentFixture<TudoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TudoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TudoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
