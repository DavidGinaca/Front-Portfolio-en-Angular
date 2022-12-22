import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioIniComponent } from './portfolio-ini.component';

describe('PortfolioIniComponent', () => {
  let component: PortfolioIniComponent;
  let fixture: ComponentFixture<PortfolioIniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioIniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioIniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
