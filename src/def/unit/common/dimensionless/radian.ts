import type { ScalarDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { meter } from '../../si/base/meter';

export const radian = 'rad' as UnitRef< ScalarDim, 'rad' >;

export default ( {
  id: radian,
  dim: [ 0, 0, 0, 0, 0, 0, 0 ],
  structure: [ {
    unit: meter,
    exp: 1
  }, {
    unit: meter,
    exp: -1
  } ],
  conversion: 1,
  prefixable: false,
  aliases: [ 'radian', 'radians' ],
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
      id: 'rad',
      canonical: true,
      format: {
        plain: 'rad',
        latex: '\\mathrm{rad}'
      }
    } ],
    name: {
      en: [ 'radian', 'radians' ],
      de: [ 'Radiant' ]
    },
    description: {
      en: 'dimensionless, accepted SI unit of plane angle',
      de: 'dimensionale, zugelassene SI-Einheit für ebenen Winkel'
    }
  }
} ) as const satisfies UnitDef< ScalarDim, typeof radian >;
