import type { TimeDim } from '../../../../types/dimension';
import type { UnitDef, UnitId } from '../../../../types/unit';

export const day = 'day' as UnitId< 'day' >;

export default ( {
  id: day,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 86400
  },
  prefixable: false,
  unitSystem: [ 'common' ],
  category: [ 'accepted' ],
  aliases: [ 'days' ],
  meta: {
    symbol: {
      default: {
        ascii: 'd',
        latex: '\\mathrm{d}'
      }
    },
    name: {
      en: [ 'day', 'days' ],
      de: [ 'Tag', 'Tage' ]
    },
    description: {
      en: 'accepted unit of time, equal to 86400 seconds',
      de: 'akzeptierte Zeiteinheit, gleich 86400 Sekunden'
    }
  }
} ) as const satisfies UnitDef< TimeDim, 'day' >;
