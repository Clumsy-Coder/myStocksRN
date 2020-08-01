import { filter } from 'lodash';

import { DataDomain } from '@redux/Stocks/Types';

// eslint-disable-next-line import/prefer-default-export
export const filterSearch = (
  keyword: string,
  symbolsMetadata: DataDomain.Symbols[],
): DataDomain.Symbols[] => {
  if (keyword.length === 0) return [];

  return filter(
    symbolsMetadata,
    ({ symbol, name }) =>
      symbol.toLowerCase().includes(keyword.toLowerCase()) ||
      name.toLowerCase().includes(keyword.toLowerCase()),
  );
};
