import type { TimeDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { second } from '../../si/base/second';

export const week = 'week' as UnitRef< TimeDim, 'week' >;

export default ( {
  id: week,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    base: second,
    factor: 6.048e5
  },
  prefixable: false,
  aliases: [ 'week', 'weeks' ],
  context: {
    system: [ 'common', 'si' ],
    si: 'accepted',
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'w',
      canonical: true,
      format: {
        plain: 'w',
        latex: '\\mathrm{w}'
      }
    } ],
    name: {
      en: [ 'week', 'weeks' ],
      de: [ 'Woche', 'Wochen' ]
    },
    description: {
      en: 'accpeted unit of time, equal to 604.800 seconds',
      de: 'akzeptierte Zeiteinheit, gleich 604.800 Sekunden'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof week >;
