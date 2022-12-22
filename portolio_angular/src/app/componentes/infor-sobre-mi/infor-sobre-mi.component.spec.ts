import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforSobreMiComponent } from './infor-sobre-mi.component';

describe('InforSobreMiComponent', () => {
  let component: InforSobreMiComponent;
  let fixture: ComponentFixture<InforSobreMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforSobreMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InforSobreMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
