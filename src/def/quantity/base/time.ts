import type { TimeDim } from '../../../types/dimension';
import type { QuantityDef, QuantityRef } from '../../../types/quantity';

import { day, hour, minute, planckTime, second, year } from '../../unit';

export const time = 'time' as QuantityRef< TimeDim, 'time' >;

export default ( {
  id: time,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  units: [ day, hour, minute, planckTime, second, year ],
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
      en: [ 'time', 'times' ],
      de: [ 'Zeit', 'Zeiten' ]
    },
    description: {
      en: 'quantity of time',
      de: 'Größe der Zeit'
    }
  }
} ) as const satisfies QuantityDef< TimeDim, typeof time >;
