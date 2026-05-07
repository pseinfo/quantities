import type { TimeDim } from '../../../../types/dimension';
import type { UnitDef, UnitId } from '../../../../types/unit';

export type min = UnitDef< TimeDim, 'min' >;

export default ( {
  id: 'min' as UnitId< 'min' >,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 60
  },
  prefixable: false,
  unitSystem: [ 'common' ],
  category: [ 'accepted' ],
  aliases: [ 'minute', 'minutes' ],
  meta: {
    symbol: {
      default: {
        ascii: 'min',
        latex: '\\mathrm{min}'
      }
    },
    name: {
      en: [ 'minute', 'minutes' ],
      de: [ 'Minute', 'Minuten' ]
    },
    description: {
      en: 'accepted unit of time, equal to 60 seconds',
      de: 'akzeptierte Zeiteinheit, gleich 60 Sekunden'
    }
  }
} ) as const satisfies min;
