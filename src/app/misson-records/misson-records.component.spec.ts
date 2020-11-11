import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissonRecordsComponent } from './misson-records.component';

describe('MissonRecordsComponent', () => {
  let component: MissonRecordsComponent;
  let fixture: ComponentFixture<MissonRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissonRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissonRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
