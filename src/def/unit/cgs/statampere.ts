import type { ElectricCurrentDim } from '../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../types/unit';

export const statampere = 'statA' as UnitRef< ElectricCurrentDim, 'statA' >;

export default ( {
  id: statampere,
  dim: [ 0, 0, 0, 1, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 3.33564e-10
  },
  prefixable: false,
  unitSystem: [ 'cgs', 'gaussian' ],
  category: [ 'non_si' ],
  aliases: [ 'statampere' ],
  meta: {
    symbol: {
      default: {
        ascii: 'statA',
        latex: '\\mathrm{statA}'
      }
    },
    name: {
      en: [ 'statampere', 'statamperes' ],
      de: [ 'Statampere' ]
    },
    description: {
      en: 'CGS / Gaussian unit of electric current',
      de: 'CGS- / Gaußsche-Einheit der elektrischen Stromstärke'
    }
  }
} ) as const satisfies UnitDef< ElectricCurrentDim, typeof statampere >;
