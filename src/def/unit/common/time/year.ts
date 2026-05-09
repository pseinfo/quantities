import type { TimeDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { second } from '../../si/base/second';

export const year = 'year' as UnitRef< TimeDim, 'year' >;

export default ( {
  id: year,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    base: second,
    factor: 3.155814954e7
  },
  prefixable: false,
  aliases: [ 'year', 'years' ],
  context: {
    system: [ 'common', 'si', 'astronomical' ],
    si: 'accepted',
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
      en: [ 'sidereal year', 'sidereal years' ],
      de: [ 'Siderisches Jahr', 'Siderische Jahre' ]
    },
    description: {
      en: 'accpeted unit of time, declared as sidereal year (approx. 365.256 days)',
      de: 'akzeptierte Zeiteinheit, definiert als siderisches Jahr (ca. 365,256 Tage)'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof year >;
