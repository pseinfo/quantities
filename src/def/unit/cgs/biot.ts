import type { ElectricCurrentDim } from '../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../types/unit';

export const biot = 'Bi' as UnitRef< ElectricCurrentDim, 'Bi' >;

export default ( {
  id: biot,
  dim: [ 0, 0, 0, 1, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 10
  },
  prefixable: false,
  unitSystem: [ 'cgs' ],
  category: [ 'non_si' ],
  aliases: [ 'biot', 'abA', 'abampere' ],
  meta: {
    symbol: {
      default: {
        ascii: 'Bi',
        latex: '\\mathrm{Bi}'
      },
      localized: {
        en: {
          ascii: 'abA',
          latex: '\\mathrm{abA}'
        }
      }
    },
    name: {
      en: [ 'abampere', 'abamperes' ],
      de: [ 'Biot' ]
    },
    description: {
      en: '(absolute) electromagnetic cgs unit of current',
      de: '(absolute) elektromagnetische CGS-Einheit der Stromstärke'
    }
  }
} ) as const satisfies UnitDef< ElectricCurrentDim, typeof biot >;
