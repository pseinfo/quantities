import type { LengthDim } from '../../../types/dimension';
import type { UnitDef, UnitId } from '../../../types/unit';

export const m = 'm' as UnitId< 'm' >;

export default ( {
  id: m,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: 1,
  prefixable: true,
  unitSystem: [ 'si' ],
  category: [ 'base' ],
  aliases: [ 'meter', 'meters', 'metre', 'metres' ],
  meta: {
    symbol: {
      default: {
        ascii: 'm',
        latex: '\\mathrm{m}'
      }
    },
    name: {
      en: [ 'meter', 'meters' ],
      de: [ 'Meter' ]
    },
    description: {
      en: 'SI base unit of length',
      de: 'SI-Basiseinheit der Länge'
    }
  }
} ) as const satisfies UnitDef< LengthDim, 'm' >;
