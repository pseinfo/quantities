import type { MassDim } from '../../../types/dimension';
import type { UnitDef, UnitId } from '../../../types/unit';

export type g = UnitDef< MassDim, 'g' >;

export default ( {
  id: 'g' as UnitId< 'g' >,
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
} ) as const satisfies g;
