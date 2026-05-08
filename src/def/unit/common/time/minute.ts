import type { TimeDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const min = 'min' as UnitRef< TimeDim, 'min' >;

export default ( {
  id: min,
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
      default: [ {
        context: 'standard',
        ascii: 'min',
        latex: '\\mathrm{min}'
      }, {
        context: 'legacy',
        ascii: '\'',
        unicode: '′',
        latex: '\\prime'
      } ]
    },
    name: {
      en: [ 'minute', 'minutes' ],
      de: [ 'Minute', 'Minuten' ]
    },
    description: {
      en: 'accepted unit of time; equal to 60 seconds',
      de: 'akzeptierte Zeiteinheit; gleich 60 Sekunden'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof min >;
