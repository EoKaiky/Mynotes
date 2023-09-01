import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoTelaComponent } from './corpo-tela.component';

describe('CorpoTelaComponent', () => {
  let component: CorpoTelaComponent;
  let fixture: ComponentFixture<CorpoTelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorpoTelaComponent]
    });
    fixture = TestBed.createComponent(CorpoTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
