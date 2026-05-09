import type { TimeDim } from '../../../types/dimension';
import type { QuantityDef, QuantityRef } from '../../../types/quantity';

import {
  day, gregorianYear, hour, julianYear, minute,
  planckTime, second, siderialYear, week
} from '../../unit';

export const time = 'time' as QuantityRef< TimeDim, 'time' >;

export default ( {
  id: time,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  units: [
    day, gregorianYear, hour, julianYear, minute,
    planckTime, second, siderialYear, week
  ],
  baseUnit: second,
  meta: {
    symbol: [ {
      id: 't',
      canonical: true,
      format: {
        plain: 't',
        latex: 't'
      }
    } ],
    name: {
      en: 'time',
      de: 'Zeit'
    },
    description: {
      en: 'quantity of time',
      de: 'Größe der Zeit'
    }
  }
} ) as const satisfies QuantityDef< TimeDim, typeof time >;
