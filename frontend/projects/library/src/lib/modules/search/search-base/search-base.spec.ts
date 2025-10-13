import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBase } from './search-base';

describe('SearchBase', () => {
  let component: SearchBase;
  let fixture: ComponentFixture<SearchBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBase],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
