import type { MassDim } from '../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../types/unit';

export const gram = 'g' as UnitRef< MassDim, 'g' >;

export default ( {
  id: gram,
  dim: [ 0, 0, 1, 0, 0, 0, 0 ],
  structure: [],
  conversion: 1,
  prefixable: true,
  unitSystem: [ 'si' ],
  category: [ 'base' ],
  aliases: [ 'gram', 'grams' ],
  meta: {
    symbol: {
      default: {
        ascii: 'g',
        latex: '\\mathrm{g}'
      }
    },
    name: {
      en: [ 'gram', 'grams' ],
      de: [ 'Gramm' ]
    },
    description: {
      en: 'SI base unit of mass',
      de: 'SI-Basiseinheit der Masse'
    }
  }
} ) as const satisfies UnitDef< MassDim, typeof gram >;
