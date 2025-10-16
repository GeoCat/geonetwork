import { AggregationTranslatePipe } from './aggregation-translate-pipe';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';
import { MockTranslateService } from '../../shared/translate.service.mock';

describe('AggregationTranslatePipe', () => {
  let pipe: AggregationTranslatePipe;
  let mockTranslateService: MockTranslateService;

  beforeEach(async () => {
    mockTranslateService = new MockTranslateService();

    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        { provide: TranslateService, useValue: mockTranslateService },
        AggregationTranslatePipe,
      ],
    });
    pipe = TestBed.inject(AggregationTranslatePipe);
  });

  it('returns the translation for a known aggregation and value', () => {
    expect(pipe.transform('1', 'group')).toBe('Odatis');
  });

  it('returns the translation for a know value and unknown aggregation', () => {
    expect(pipe.transform('dataset', 'xyz')).toBe('Dataset');
  });

  it('returns the value if translation is missing', () => {
    expect(pipe.transform('adz', 'xyz')).toBe('adz');
  });

  it('returns the number as is when value is a number', () => {
    expect(pipe.transform(42, 'isTemplate')).toBe(42);
  });
});
