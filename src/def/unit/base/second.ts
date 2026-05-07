import type { TimeDim } from '../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../types/unit';

export const s = 's' as UnitRef< TimeDim, 's' >;

export default ( {
  id: s,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: 1,
  prefixable: true,
  unitSystem: [ 'si' ],
  category: [ 'base' ],
  aliases: [ 'sec', 'second', 'seconds' ],
  meta: {
    symbol: {
      default: {
        ascii: 's',
        latex: '\\mathrm{s}'
      }
    },
    name: {
      en: [ 'second', 'seconds' ],
      de: [ 'Sekunde', 'Sekunden' ]
    },
    description: {
      en: 'SI base unit of time',
      de: 'SI-Basiseinheit der Zeit'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof s >;
