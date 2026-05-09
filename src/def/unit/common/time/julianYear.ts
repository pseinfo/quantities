import type { TimeDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { second } from '../../si/base/second';

export const julianYear = 'julianYear' as UnitRef< TimeDim, 'julianYear' >;

export default ( {
  id: julianYear,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    base: second,
    factor: 3.15576e7
  },
  prefixable: false,
  aliases: [ 'julian year', 'julian years' ],
  context: {
    system: [ 'common' ],
    status: 'historical'
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
      en: [ 'julian year', 'julian years' ],
      de: [ 'Julianisches Jahr', 'Julianische Jahre' ]
    },
    description: {
      en: 'historical unit of time, declared as julian year (exactly 365.25 days)',
      de: 'historische Zeiteinheit, definiert als julianisches Jahr (genau 365,25 Tage)'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof julianYear >;
