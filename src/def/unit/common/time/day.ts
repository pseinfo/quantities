import type { TimeDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const day = 'day' as UnitRef< TimeDim, 'day' >;

export default ( {
  id: day,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 86400
  },
  prefixable: false,
  aliases: [ 'day', 'days' ],
  context: {
    system: [ 'common', 'si' ],
    si: 'accepted',
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'd',
      canonical: true,
      context: {
        system: [ 'common', 'si' ]
      },
      format: {
        plain: 'd',
        latex: '\\mathrm{d}'
      }
    } ],
    name: {
      en: [ 'day', 'days' ],
      de: [ 'Tag', 'Tage' ]
    },
    description: {
      en: 'accpeted unit of time, equal to 86,400 seconds',
      de: 'akzeptierte Zeiteinheit, gleich 86.400 Sekunden'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof day >;
