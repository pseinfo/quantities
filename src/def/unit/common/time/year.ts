import type { TimeDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const year = 'year' as UnitRef< TimeDim, 'year' >;

export default ( {
  id: year,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 31557600
  },
  prefixable: false,
  unitSystem: [ 'common' ],
  category: [ 'accepted' ],
  aliases: [ 'years' ],
  meta: {
    symbol: {
      default: {
        ascii: 'a',
        latex: '\\mathrm{a}'
      }
    },
    name: {
      en: [ 'year', 'years' ],
      de: [ 'Jahr', 'Jahre' ]
    },
    description: {
      en: 'accepted unit of time; equal to 31557600 seconds',
      de: 'akzeptierte Zeiteinheit; gleich 31557600 Sekunden'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof year >;
