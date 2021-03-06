import { CurrencyPipe } from '@angular/common';
import { isArray } from 'lodash-es';


export function currency(amount, precision: [number, number] | number = [2,10], currencyCode = 'USD', locale = 'en-US') {
  const digitsInfo = isArray(precision) ? precision : [precision, precision];
  return new CurrencyPipe(locale).transform(amount, currencyCode, 'symbol', `1.${digitsInfo[0]}-${digitsInfo[1]}`);
}
