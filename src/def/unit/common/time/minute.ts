import type { TimeDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const minute = 'min' as UnitRef< TimeDim, 'min' >;

export default ( {
  id: minute,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 60
  },
  prefixable: false,
  aliases: [ 'minute', 'minutes' ],
  context: {
    system: [ 'common', 'si' ],
    si: 'accepted',
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'min',
      canonical: true,
      context: {
        system: [ 'common', 'si' ]
      },
      format: {
        plain: 'min',
        latex: '\\mathrm{min}'
      }
    }, {
      id: 'prime',
      context: {
        system: [ 'common', 'si' ]
      },
      format: {
        plain: '\'',
        unicode: '′',
        latex: '\\prime'
      }
    } ],
    name: {
      en: [ 'minute', 'minutes' ],
      de: [ 'Minute', 'Minuten' ]
    },
    description: {
      en: 'accpeted unit of time, equal to 60 seconds',
      de: 'akzeptierte Zeiteinheit, gleich 60 Sekunden'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof minute >;
