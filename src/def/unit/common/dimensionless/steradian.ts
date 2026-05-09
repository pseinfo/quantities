import type { ScalarDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { meter } from '../../si/base/meter';

export const steradian = 'sr' as UnitRef< ScalarDim, 'sr' >;

export default ( {
  id: steradian,
  dim: [ 0, 0, 0, 0, 0, 0, 0 ],
  structure: [ {
    unit: meter,
    exp: 2
  }, {
    unit: meter,
    exp: -2
  } ],
  conversion: 1,
  prefixable: false,
  aliases: [ 'steradian', 'steradians' ],
  context: {
    system: [ 'common', 'si' ],
    si: 'accepted',
    status: 'active',
    property: {
      dimensionless: true
    }
  },
  meta: {
    symbol: [ {
      id: 'sr',
      canonical: true,
      format: {
        plain: 'sr',
        latex: '\\mathrm{sr}'
      }
    } ],
    name: {
      en: [ 'steradian', 'steradians' ],
      de: [ 'Steradiant' ]
    },
    description: {
      en: 'dimensionless, accepted SI unit of solid angle',
      de: 'dimensionale, zugelassene SI-Einheit für Raumwinkel'
    }
  }
} ) as const satisfies UnitDef< ScalarDim, typeof steradian >;
