import type { TimeDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { second } from '../../si/base/second';

export const gregorianYear = 'gregorianYear' as UnitRef< TimeDim, 'gregorianYear' >;

export default ( {
  id: gregorianYear,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    base: second,
    factor: 3.1556952e7
  },
  prefixable: false,
  aliases: [ 'gregorian year', 'gregorian years' ],
  context: {
    system: [ 'common' ],
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'a',
      canonical: true,
      format: {
        plain: 'a',
        latex: '\\mathrm{a}'
      }
    } ],
    name: {
      en: [ 'gregorian year', 'gregorian years' ],
      de: [ 'Gregorisches Jahr', 'Gregorische Jahre' ]
    },
    description: {
      en: 'unit of time, declared as gregorian year (approx. 365.2425 days)',
      de: 'Zeiteinheit, definiert als gregorianisches Jahr (ca. 365,2425 Tage)'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof gregorianYear >;
