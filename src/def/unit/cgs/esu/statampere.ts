import type { ElectricCurrentDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const statampere = 'statA' as UnitRef< ElectricCurrentDim, 'statA' >;

export default ( {
  id: statampere,
  dim: [ 0, 0, 0, 1, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 3.33564e-10
  },
  prefixable: false,
  aliases: [ 'statampere', 'statamperes' ],
  context: {
    system: [ 'cgs', 'cgs_esu', 'cgs_gaussian' ],
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'statA',
      canonical: true,
      format: {
        plain: 'statA',
        latex: '\\mathrm{statA}'
      }
    } ],
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
