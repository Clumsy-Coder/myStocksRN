import * as utilities from '@share/Utilities';

import * as testdata from 'jest.testdata';
import { DataDomain } from '@redux/Stocks/Types';

describe('Utilities', () => {
  describe('filterSearch', () => {
    it('should return empty array', () => {
      const expected: DataDomain.Symbols[] = [];
      const keyword = '';

      expect(utilities.filterSearch(keyword, [testdata.symbolsMetadata1])).toEqual(expected);
    });

    it('should match symbol', () => {
      const expected: DataDomain.Symbols[] = [testdata.symbolsMetadata1];
      const keyword = testdata.stockSymbol1;

      expect(
        utilities.filterSearch(keyword, [testdata.symbolsMetadata1, testdata.symbolsMetadata2]),
      ).toEqual(expected);
    });

    it('should match company name', () => {
      const expected: DataDomain.Symbols[] = [testdata.symbolsMetadata1];
      const keyword = 'International Business Machines Corporation';

      expect(
        utilities.filterSearch(keyword, [testdata.symbolsMetadata1, testdata.symbolsMetadata2]),
      ).toEqual(expected);
    });

    it('should return empty array due to no matches', () => {
      const expected: DataDomain.Symbols[] = [];
      const keyword = testdata.stockSymbol2;

      expect(utilities.filterSearch(keyword, [testdata.symbolsMetadata1])).toEqual(expected);
    });
  });
});
